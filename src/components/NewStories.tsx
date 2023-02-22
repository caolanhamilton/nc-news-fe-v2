import Link from "next/link";
import type { Article } from "../../types";

type Props = {
  newStories: Article[];
};

export default function NewStories({ newStories }: Props) {
  return (
    <div className="space-y-8 bg-black p-6 md:w-1/3">
      <h2 className="text-6xl font-semibold text-orange-400 md:text-3xl lg:text-5xl">
        New
      </h2>
      {newStories.map((story) => (
        <div
          className="space-y-2 border-b-2 border-slate-400 pb-4"
          key={story.article_id}
        >
          <Link
            href={`/articles/${story.article_id}`}
            key={story.article_id}
            className="space-y-2 border-b-2 border-slate-400 pb-4"
          >
            <h3 className="text-xl font-bold text-white hover:text-orange-400 md:text-2xl">
              {story.title}
            </h3>
          </Link>

          <p className="text-slate-400">{story.body.slice(0, 66) + "..."}</p>
        </div>
      ))}
    </div>
  );
}
