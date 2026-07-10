import { create } from "zustand";
import { persist } from "zustand/middleware";

// shape of one single product in the cart
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  removeItem: (id: string) => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
  persist((set, get) => ({
    items: [],
    addItem: (item) =>
      set((state) => {
        const existing = state.items.find((i) => i.id === item.id);
        // Only update qunatity if the product is in the cart
        if (existing) {
          return {
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
            ),
          };
        }

        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),
    removeItem: (id) =>
      set((state) => ({
        items: state.items.filter((i) => i.id !== id),
      })),

    //   Update Quantity, if the new qunaitiy is 0 or less, dropping the item entirely
    updateQuantity: (id, quantity) => {
      if (quantity <= 0) {
        get().removeItem(id);
        return;
      }

      set((state) => ({
        items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
      }));
    },

    clearCart: () => set({ items: [] }),

    // Drived getters
    totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

    totalPrice: () =>
      get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  }),

{
    name:"zustand-demo-cart"
}
),
);