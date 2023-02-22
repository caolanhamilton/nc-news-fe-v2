import type { Comment, Article } from "../../types";

export function sortByDate(array: Array<Article | Comment>): Array<Article | Comment> {
  return array.sort(
    (a, b) =>
      Number(new Date(b["created_at"])) - Number(new Date(a["created_at"]))
  );
}


