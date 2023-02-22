import React, { useState } from "react";
import type { Comment, PatchCommentVotes } from "../../types";
import { patchCommentVotes } from "../apiCalls/updateCommentVotes";
import UpVoteButton from "./UpVoteButton";
import DownVoteBtn from "./DownVoteButton";

type Props = {
  comment: Comment;
  articleId: number;
};

export default function CommentVoter({ comment, articleId }: Props) {
  const [likeChanges, setLikeChanges] = useState(0);
  return (
    <div className="flex h-24 flex-col justify-center space-y-2 rounded-lg bg-slate-800 text-center">
      <UpVoteButton
        setLikeChanges={setLikeChanges}
        ids={{ commentId: comment.comment_id, articleId: articleId }}
        likeChanges={likeChanges}
        patchVoteFunc={patchCommentVotes as PatchCommentVotes}
      ></UpVoteButton>
      <p>{comment.votes + likeChanges}</p>
      <DownVoteBtn
        setLikeChanges={setLikeChanges}
        ids={{ commentId: comment.comment_id, articleId: articleId }}
        likeChanges={likeChanges}
        patchVoteFunc={patchCommentVotes as PatchCommentVotes}
      ></DownVoteBtn>
    </div>
  );
}
