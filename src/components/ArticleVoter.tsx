import { useState } from "react";
import DownVoteBtn from "./DownVoteButton";
import UpVoteButton from "./UpVoteButton";
import type { Article, PatchArticleVotes } from "../../types";
import { patchArticleVotes } from "../apiCalls/updateArticleVotes";

type Props = {
  article: Article;
};

export default function ArticleVoter({ article }: Props) {
  const [likeChanges, setLikeChanges] = useState(0);

  return (
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
  );
}
