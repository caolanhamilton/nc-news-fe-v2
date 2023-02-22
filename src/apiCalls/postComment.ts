export function postComment(articleId: number, body: string, userName: string) {
  return fetch(
    `https://nc-news-production.up.railway.app/api/articles/${articleId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: body,
        username: userName,
      }),
    }
  );
}
