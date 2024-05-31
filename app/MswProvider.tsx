'use client';
import { useEffect } from 'react';

export function MswProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    async function enableApiMocking() {
      if (typeof window === 'undefined') {
        const { server: serverWorker } = await import('../mocks/server');
        console.log(serverWorker);
        serverWorker.listen();
      } else {
        const { worker } = await import('../mocks/browser');
        await worker.start();
      }
    }

    enableApiMocking();
  }, []);

  return <>{children}</>;
}
