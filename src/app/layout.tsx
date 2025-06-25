import Wrapper from '@/components/layout/wrapper/wrapper';
import Providers from '@/components/utility/providers/providers';
import '@/styles/index.scss';

// $======================== RootLayout ========================$ //

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html
      lang='en'
    // className={`${inter.variable} ${unbounded.variable}`} // fonts
    >
      <body>
        <Providers>
          <Wrapper>
            {children}
          </Wrapper>
        </Providers>
      </body>
    </html>
  );
}
