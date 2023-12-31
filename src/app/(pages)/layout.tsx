import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="container mx-auto px-40 pt-7">
        {children}
    </div>
  );
}
