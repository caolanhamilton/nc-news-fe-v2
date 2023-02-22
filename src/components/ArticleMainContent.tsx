import React from "react";
import Image from "next/image";

type Props = {
    articleBody: string;
};

export default function ArticleMainContent({articleBody}: Props) {
  return (
    <>
      <div className="flex items-center justify-center ">
        <Image
          src={"/image-web-3-desktop.jpg"}
          alt="main story photo"
          height={800}
          width={600}
          className="aspect-square w-full  object-cover md:mb-4 md:aspect-auto"
        />
      </div>
      <article>
        <p className="text-2xl">{articleBody}</p>
      </article>
    </>
  );
}
