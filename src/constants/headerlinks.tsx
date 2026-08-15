import { House, Info, Newspaper, NotebookPen } from "lucide-react";

const headerLinks = [
  {
    id: 1,
    link: "/",
    title: "Home",
    icon: <House />,
  },
  {
    id: 2,
    link: "/articles",
    title: "Articles",
    icon: <Newspaper />,
  },
  {
    id: 3,
    link: "/about",
    title: "About",
    icon: <Info />,
  },
  {
    id: 4,
    link: "/write",
    title: "Write",
    icon: <NotebookPen />,
  },
];

export default headerLinks;
