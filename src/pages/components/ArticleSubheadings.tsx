import { useState } from "react";
import type { Article, PatchArticleVotes } from "../../../types";
import { patchArticleVotes } from "../../apiCalls/updateArticleVotes";
import UpVoteButton from "./UpVoteButton";
import DownVoteBtn from "./DownVoteButton";

type Props = {
  article: Article;
};

// get original votes on load

export default function ArticleSubheadings({ article }: Props) {
  const [likeChanges, setLikeChanges] = useState(0);

  return (
    <div className="flex items-center justify-between space-x-8">
      <div className="flex items-center space-x-2">
        <div className="w-24 rounded-full border border-orange-500 bg-orange-300 p-1 text-center uppercase">
          <p className="text-white">{article.topic}</p>
        </div>
        <div className="flex w-24 flex-row justify-evenly space-x-2 rounded-lg bg-slate-800 p-1">
          <DownVoteBtn
            setLikeChanges={setLikeChanges}
            likeChanges={likeChanges}
            ids={{ articleId: article.article_id, commentId: -1 }}
            patchVoteFunc={patchArticleVotes as PatchArticleVotes}
          ></DownVoteBtn>
          <p className="text-white">{article.votes + likeChanges}</p>
          <UpVoteButton
            setLikeChanges={setLikeChanges}
            likeChanges={likeChanges}
            ids={{ articleId: article.article_id, commentId: -1 }}
            patchVoteFunc={patchArticleVotes as PatchArticleVotes}
          ></UpVoteButton>
        </div>
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
