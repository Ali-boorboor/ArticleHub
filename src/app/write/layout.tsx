import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write Page",
  description: "Write your Article in ArticleHub",
};

const WriteLayout = ({ children }: LayoutProps<"/write">) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default WriteLayout;
