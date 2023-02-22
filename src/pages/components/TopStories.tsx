import React from "react";
import Image from "next/image";
import type { Article } from "../../../types";
import Link from "next/link";

type Props = {
  topStories: Article[];
};

export default function TopStories({ topStories }: Props) {
  console.log(topStories);
  return (
    <>
      <h3 className="text-6xl font-bold italic text-orange-400">
        Most popular
      </h3>
      <div className="my-20 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        {topStories.map((story, index) => (
          <Link
            href={`/articles/${story.article_id}`}
            className="flex space-x-4 md:w-1/3 md:space-x-8"
            key={story.article_id}
          >
         
            <Image
              src={"/image-retro-pcs.jpg"}
              height={200}
              width={200}
              alt="computer screen"
              className="max-h-92 h-full w-1/3 object-cover lg:h-full"
            />
            <div className="flex flex-col space-y-4 md:justify-between lg:space-y-2 ">
              <h2 className="text-4xl font-semibold text-slate-400">
                0{index + 1}
              </h2>
              <h3 className="text-md md:text-md font-bold text-black hover:text-orange-400 ">
                {story.title}
              </h3>
              <p className="lg:text-md text-sm text-slate-400">
                {story.body.slice(0, 80)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
