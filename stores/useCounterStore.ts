import React from 'react'
// Step 1: Import Create from zustand
import {create } from 'zustand'

//Step 2: Describe the shapre of the store - typescript

type CounterStore = {
    count: number // State that we will be changing
    increment: ()=> void
    decrement: () => void
    reset: () => void
}


// Step 3 : Create the store
export const useCounterStore = create<CounterStore>()((set)=>({
    count: 0,
    increment: ()=> set((state)=>({count: state.count + 1})),
    decrement: ()=> set((state)=>({count: state.count - 1})),
    reset: () => set({count:0})
}))