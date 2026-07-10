'use client'
import { useCounterStore } from "@/stores/useCounterStore"

const CounterButtons = () => {
    const increment = useCounterStore((s)=> s.increment)
    const decrement = useCounterStore((s)=> s.decrement)
    const reset = useCounterStore((s)=> s.reset)
  return (
    <div className="flex items-center justify-center gap-3">
        <button onClick={decrement} className="h-12 w-12 rounded-lg bg-gray-200 text-2xl font-bold text-gray-700 hover:bg-gray-300">-</button>
        <button onClick={reset} className="h-12 w-20 rounded-lg bg-gray-100 px-5 font-medium text-gray-600 hover:bg-gray-200">Reset</button>
        <button onClick={increment} className="h-12 w-12 rounded-lg bg-blue-600 text-2xl font-bold text-white hover:bg-blue-700">+</button>
    </div>
  )
}

export default CounterButtons
