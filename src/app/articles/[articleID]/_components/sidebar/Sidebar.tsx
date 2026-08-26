import AuthorInfos from "@/app/articles/[articleID]/_components/sidebar/AuthorInfos";
import SuggestedArticles from "@/app/articles/[articleID]/_components/sidebar/SuggestedArticles";

const Sidebar = () => {
  return (
    <aside className="md:sticky top-22 z-40 bg-sidebar max-w-full md:max-w-xs w-full flex flex-col gap-4 justify-between p-4 rounded-lg border shadow">
      <AuthorInfos />

      <SuggestedArticles />
    </aside>
  );
};

export default Sidebar;
