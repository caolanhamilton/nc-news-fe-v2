import Image from "next/image";
import Link from "next/link";
import type { Article } from "../../types";

type Props = {
  mainStory: Article | undefined;
};

export default function MainStory({ mainStory }: Props) {
  return (
    <Link
      href={`/articles/${mainStory ? mainStory.article_id : ""}`}
      className="md:w-2/3"
    >
      <Image
        src={"/image-web-3-desktop.jpg"}
        alt="main story photo"
        height={800}
        width={600}
        className="aspect-square w-full object-cover md:aspect-auto"
      />
      <div className="flex flex-col space-y-6 py-8 md:flex-row md:space-x-16">
        <h1 className="text-4xl font-extrabold md:w-1/2 md:text-5xl">
          {mainStory?.title}
        </h1>
        <div className="flex flex-col justify-between space-y-6 md:w-1/2">
          <p>{mainStory?.body}</p>
          <button className="w-40 bg-orange-400 p-3 text-center font-bold uppercase tracking-widest text-white hover:bg-orange-400 md:bg-black">
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
}
