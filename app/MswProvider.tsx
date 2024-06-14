'use client';
import { useEffect } from 'react';

export function MswProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // return; // msw적용안하려면 여기서 리턴하면됨
    async function enableApiMocking() {
      if (typeof window === 'undefined') {
        const { server: serverWorker } = await import('../mocks/server');
        serverWorker.listen();
      } else {
        const { worker } = await import('../mocks/browser');
        await worker.start({ onUnhandledRequest: 'bypass' });
      }
    }

    enableApiMocking();
  }, []);

  return <>{children}</>;
}
