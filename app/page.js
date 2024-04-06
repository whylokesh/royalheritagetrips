import Image from "next/image";
import Header from "./components/header/page";
import Main from "./components/main/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
