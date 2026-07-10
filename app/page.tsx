import Image from "next/image";
import CounterDisplay from "@/components/CounterDisplay";
import CounterButtons from "@/components/CounterButtons";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">
        Global state in one screen
      </h2>
      <p className="mb-8 text-gray-500">
        The disapy and the buttons are separate components. No Props pass
        between them - the share the counter through the store
      </p>
      <div className="space-y-6">
        <CounterDisplay />
        <CounterButtons/>
      </div>
    </main>
  );
}
