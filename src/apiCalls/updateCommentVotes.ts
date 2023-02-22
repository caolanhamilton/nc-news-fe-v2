export function patchCommentVotes(vote: number, articleId: number, commentId: number) {
  return fetch(
    `https://nc-news-production.up.railway.app/api/articles/${articleId}/comments/${commentId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inc_votes: vote,
      }),
    }
  );
}
