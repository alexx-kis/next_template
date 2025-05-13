import Providers from '@/components/providers/providers';
import '@/styles/index.scss';
import type { Metadata } from "next";

// $======================== RootLayout ========================$ //

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html
      lang='en'
      // className={`${inter.variable} ${unbounded.variable}`} // fonts
    >
      <body>
        <Providers>
          <div className='wrapper'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
