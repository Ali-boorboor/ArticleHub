import { type JSONContent } from "@tiptap/react";
import mongoose from "mongoose";

interface IArticle extends mongoose.Document {
  title: string;
  slug: string;
  cover: string;
  content: JSONContent;
}

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    coverUrl: {
      type: String,
      required: true,
    },
    content: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true },
);

const ArticleModel: mongoose.Model<IArticle> =
  mongoose.models.Article || mongoose.model("Article", schema);

export default ArticleModel;
export type { IArticle };

