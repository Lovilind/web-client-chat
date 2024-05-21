'use client';
import { useCounterStore } from '@/app/_store/providers/rootStoreProvider';

export default function ChatPage() {
  const { count, incrementCount, decrementCount } =
    useCounterStore((state) => {
      return state;
    }) || {};

  return (
    <div>
      Count: {count}
      <hr />
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}
