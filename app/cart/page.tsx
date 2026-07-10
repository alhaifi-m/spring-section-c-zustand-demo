"use client";
import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useCartStore } from "@/stores/useCartStore";

const CartPage = () => {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);
  const removeItem = useCartStore((s) => s.removeItem);
  // calculated values
  const totalItems = useCartStore((s) => s.totalItems());
  const totalPrice = useCartStore((s) => s.totalPrice());

  return (
    <main className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-2">
      {/* Left: Product to be added */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900">Products</h2>
        <div className="space-y-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* RIGHT: The Live Cart */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="mb-4 flex items-center justify-between">
            Cart ({totalItems})
          </h2>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-sm font-medium text-red-600 hover:underline"
            >
              Clear
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <p className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-400">
            Your car is empty
          </p>
        ) : (
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4"
              >
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8 bg-gray-200 font-bold text-gray-700 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-semibold"> {item.quantity}</span>
                   <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 bg-gray-200 font-bold text-gray-700 hover:bg-gray-300"
                  >
                    +
                  </button>

                  <button onClick={()=> removeItem(item.id)} className="ml-2 text-sm text-red-600 hover:underline">
                    remove
                  </button>
                </div>
              </div>
            ))}

              {/* Derived total price */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-3 text-lg font-bold">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CartPage;
