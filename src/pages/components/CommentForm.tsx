import React, { useState } from "react";
import { Comment } from "../../../types";
import { postComment } from "../../apiCalls/postComment";

type Props = {
  articleId: number;
  setFetchedComments: React.Dispatch<React.SetStateAction<Comment[]>>;
};

function addComment(
  articleId: number,
  comment: string,
  setFetchedComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  userName: string,
  setCommentInput: React.Dispatch<React.SetStateAction<string>>
) {
  postComment(articleId, comment, userName)
    .then((data) => {
      return data.json();
    })
    .then(({ newComment }) => {
      setFetchedComments((currentComments) => {
        return [newComment, ...currentComments] as Comment[];
      });
    })
    .catch(() => {
      alert("Something went wrong, please try again later");
    });
  setCommentInput("");
}

export default function CommentForm({ articleId, setFetchedComments }: Props) {
  const [commentInput, setCommentInput] = useState("");

  return (
    <form
      className="flex w-full flex-row items-center justify-between"
      onSubmit={(e) => {
        e.preventDefault();
        addComment(
          articleId,
          commentInput,
          setFetchedComments,
          "grumpy19",
          setCommentInput
        );
      }}
    >
      <input
        type="text"
        placeholder="Add a comment"
        className="w-full bg-gray-800 p-3 text-white"
        required
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
      ></input>
      <button
        type="submit"
        className="w-40 bg-orange-400 p-3 text-center font-bold uppercase tracking-widest text-white hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
}
