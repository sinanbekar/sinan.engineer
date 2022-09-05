import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = { children?: React.ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="px-8">{children}</main>
      <Footer />
    </>
  );
}
