export function patchArticleVotes(vote: number, articleId: number) {
  return fetch(
    `https://nc-news-production.up.railway.app/api/articles/${articleId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes: vote }),
    }
  );
}
