import type { Article } from "../../types";
import ArticleVoter from "./ArticleVoter";

type Props = {
  article: Article;
};

// get original votes on load

export default function ArticleSubheadings({ article }: Props) {
  return (
    <div className="flex items-center justify-between space-x-8">
      <div className="flex items-center space-x-2">
        <div className="w-24 rounded-full border border-orange-500 bg-orange-300 p-1 text-center uppercase">
          <p className="text-white">{article.topic}</p>
        </div>
        <ArticleVoter article={article} />
      </div>
      <div className="font-semibold italic text-gray-400">
        <p>
          Posted {article.created_at.toString().split("T")[0]} by{" "}
          {article.author}
        </p>
        <p></p>
      </div>
    </div>
  );
}
