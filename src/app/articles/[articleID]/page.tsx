import Article from "@/app/articles/[articleID]/_components/Article";
import Sidebar from "@/app/articles/[articleID]/_components/sidebar/Sidebar";

const SingleArticlePage = () => {
  return (
    <main className="container min-w-0 mx-auto px-4 flex md:items-start flex-col-reverse md:flex-row justify-between gap-4">
      <Article />

      <Sidebar />
    </main>
  );
};

export default SingleArticlePage;
