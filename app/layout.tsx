import 'styles/scss/styles.scss';
import Head from './head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
