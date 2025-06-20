import Providers from '@/components/providers/providers';
import Wrapper from '@/components/shared/wrapper/wrapper';
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
