import React from "react";
import type { Comment } from "../../../types";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { useState } from "react";

type Props = {
  comments: Comment[];
  commentsExpanded: boolean;
  setCommentsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  articleId: number;
};

export default function CommentsListContainer({
  comments,
  commentsExpanded,
  setCommentsExpanded,
  articleId,
}: Props) {
  const [fetchedComments, setFetchedComments] = useState(comments);

  return (
    <div className="flex flex-col items-center space-y-8 bg-black p-6 text-white">
      <h2 className="w-full text-left text-4xl font-semibold text-orange-400 md:text-4xl lg:text-5xl">
        Comments
      </h2>

      <CommentForm
        articleId={articleId}
        setFetchedComments={setFetchedComments}
      ></CommentForm>

      <div className={commentsExpanded ? "" : "h-80 overflow-hidden"}>
        {fetchedComments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              articleId={articleId}
              setFetchedComments={setFetchedComments}
            ></CommentCard>
          );
        })}
      </div>

      <button
        onClick={() => {
          setCommentsExpanded(!commentsExpanded);
        }}
        className="w-40 bg-orange-400 p-3 text-center font-bold uppercase tracking-widest text-white hover:scale-105"
      >
        {commentsExpanded ? "Minimise" : "Expand"}
      </button>
    </div>
  );
}
