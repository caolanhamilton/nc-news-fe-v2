import React from "react";
import type { Comment } from "../../types";
import Image from "next/image";
import CommentVoter from "./CommentVoter";
import { sortByDate } from "../utills/sortByDate";
import { deleteComment } from "../apiCalls/deleteComment";

type Props = {
  comment: Comment;
  articleId: number;
  setFetchedComments: React.Dispatch<React.SetStateAction<Comment[]>>;
};

function handleDeleteCommentClick(
  setFetchedComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  comment: Comment
) {
  const commentToDelete = comment;
  setFetchedComments((currComments) => {
    return currComments.filter(
      (currComment) => currComment.comment_id !== comment.comment_id
    );
  });
  deleteComment(comment.comment_id).catch(() => {
    setFetchedComments((currComments) => {
      return sortByDate([commentToDelete, ...currComments]) as Comment[];
    });
    alert("Error deleting comment");
  });
}

export default function CommentCard({
  comment,
  articleId,
  setFetchedComments,
}: Props) {
  return (
    <div className="flex flex-row border-b-2 border-slate-800">
      <div className="w-12 px-1 pt-8">
        <CommentVoter comment={comment} articleId={articleId}></CommentVoter>
      </div>
      <div className="ml-4 flex w-full flex-col space-y-4 py-8">
        <div className="flex flex-row space-x-4">
          <div className="flex flex-row items-start space-x-3">
            <Image
              src={"/usericon.svg"}
              alt="user avatar"
              height={50}
              width={50}
              className="h-10 w-10 rounded-full bg-white"
            />
            <div>
              <p>{comment.author}</p>
              <p className="text-slate-600">
                {comment.created_at.toString().split("T")[0]}
              </p>
            </div>
          </div>
        </div>
        <p>{comment.body}</p>
      </div>
      {comment.author === "grumpy19" && (
        <button
          onClick={() => {
            handleDeleteCommentClick(setFetchedComments, comment);
          }}
        >
          <Image
            height={24}
            width={24}
            alt="trash can delete bin"
            src={"/trash.svg"}
            className="m-4 h-8 w-8 rounded-full bg-red-200 p-2"
          />
        </button>
      )}
    </div>
  );
}
