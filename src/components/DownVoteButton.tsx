import React from "react";

type Props = {
  setLikeChanges: React.Dispatch<React.SetStateAction<number>>;
  ids: { articleId: number; commentId: number };
  likeChanges: number;
  patchVoteFunc: (
    vote: number,
    articleId: number,
    commentId: number
  ) => Promise<Response>;
};

export default function DownVoteButton({
  setLikeChanges,
  likeChanges,
  ids,
  patchVoteFunc,
}: Props) {
  function handleDownVote(
    setLikeChanges: React.Dispatch<React.SetStateAction<number>>,
    articleId: number,
    commentId: number
  ) {
    setLikeChanges((currentLikes) => currentLikes - 1);
    patchVoteFunc(-1, articleId, commentId).catch(() => {
      setLikeChanges((currentLikes) => currentLikes + 1);
      alert("Something went wrong, please try again later");
    });
  }

  return (
    <button
      className={`text-red-500 ${likeChanges < 0 ? "opacity-20" : ""}`}
      disabled={likeChanges < 0}
      onClick={() => {
        handleDownVote(setLikeChanges, ids.articleId, ids.commentId);
      }}
    >
      -
    </button>
  );
}
