'use client';
import { useCounterStore } from '@/app/store/providers/rootStoreProvider';

export default function ZustandPage() {
  const { count, incrementCount, decrementCount } =
    useCounterStore((state) => {
      return state;
    }) || {};

  return (
    <div className="flex items-center gap-10 p-20">
      <p>Count: {count}</p>
      <hr />
      <button
        className="h-12 w-12 rounded-full bg-slate-300 hover:bg-slate-600 hover:text-white"
        onClick={incrementCount}
      >
        +
      </button>
      <button
        className="h-12 w-12 rounded-full bg-slate-300 hover:bg-slate-600 hover:text-white"
        onClick={decrementCount}
      >
        -
      </button>
    </div>
  );
}
