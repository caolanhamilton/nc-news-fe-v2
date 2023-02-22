export function deleteComment(commentId: number) {
  return fetch(
    `https://nc-news-production.up.railway.app/api/comments/${commentId}`,
    {
      method: "DELETE",
    }
  );
}
