import MetaForWebApp from "./MetaForWebApp";
import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";
import { useEffect } from "react";
import { useStore } from "@/context";

function Layout({ children }: TLayout) {
  const { title: metaTitle } = useStore();

  useEffect(() => {
    setHeightForMainSection();
  }, []);

  return (
    <>
      <MetaForWebApp title={metaTitle} />
      <main className={styles.mainContainer}>
        <Header />
        <section className={styles.mainSection} id="mainSectionId">
          {children}
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Layout;

const setHeightForMainSection = () => {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const mainSection = document.getElementById("mainSectionId");
  if (header && footer) {
    if (mainSection) {
      mainSection.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`;
    }
  }
};

type TLayout = {
  children: React.ReactNode;
};
