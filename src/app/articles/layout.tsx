import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles Page",
  description: "Articles in ArticleHub",
};

const ArticlesLayout = ({ children }: LayoutProps<"/articles">) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default ArticlesLayout;
