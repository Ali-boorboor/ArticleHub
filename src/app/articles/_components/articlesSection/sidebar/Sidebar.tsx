import Buttons from "@/app/articles/_components/articlesSection/sidebar/Buttons";
import Inputs from "@/app/articles/_components/articlesSection/sidebar/Inputs";

const authors = [
  {
    id: "1",
    label: "ali",
    articlesCount: 20,
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "2",
    label: "reza",
    articlesCount: 70,
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "3",
    label: "john",
    articlesCount: 10,
    avatar: "https://github.com/shadcn.png",
  },
];

const tags = [
  {
    id: "1",
    label: "feature",
  },
  {
    id: "2",
    label: "technology",
  },
  {
    id: "3",
    label: "gadget",
  },
];

const Sidebar = () => {
  return (
    <aside className="md:sticky top-22 z-40 bg-sidebar max-w-full md:max-w-xs w-full flex flex-col gap-4 justify-between p-4 rounded-lg border shadow">
      <Inputs authors={authors} tags={tags} />

      <Buttons />
    </aside>
  );
};

export default Sidebar;
