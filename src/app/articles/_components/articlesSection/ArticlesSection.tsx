import Pagination from "@/app/articles/_components/articlesSection/Pagination";
import Sidebar from "@/app/articles/_components/articlesSection/sidebar/Sidebar";
import Article from "@/components/article";

const ArticlesSection = () => {
  return (
    <section className="flex md:items-start flex-col-reverse md:flex-row justify-between gap-4">
      <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4">
        {Array.from({ length: 9 })
          .fill(0)
          .map((_, index) => (
            <Article key={index} />
          ))}

        <Pagination />
      </div>

      <Sidebar />
    </section>
  );
};

export default ArticlesSection;
