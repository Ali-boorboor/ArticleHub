import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description:
    "About ArticleHub, a publishing platform with Next.js, Tiptap, MongoDB, and React Query",
};

const AboutLayout = ({ children }: LayoutProps<"/about">) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default AboutLayout;
