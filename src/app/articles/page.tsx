import ArticlesPageHeading from "@/app/articles/_components/ArticlesPageHeading";
import ArticlesSection from "@/app/articles/_components/articlesSection/ArticlesSection";

const Page = () => {
  return (
    <main className="container mx-auto px-4 space-y-4">
      <ArticlesPageHeading />

      <ArticlesSection />
    </main>
  );
};

export default Page;
