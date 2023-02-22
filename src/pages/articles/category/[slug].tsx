import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import type { Article, Topic } from "../../../../types";
import HeaderNav from "../../components/HeaderNav";
import Image from "next/image";
import Link from "next/link";

type Props = {
  articles: Article[];
  slug: string;
};

const ArticleList: NextPage<Props> = ({ articles, slug }) => {
  return (
    <div className="mx-4 md:mx-20 lg:mx-40">
      <HeaderNav></HeaderNav>
      <h3 className="text-6xl font-bold italic text-orange-400">
        All {slug} articles
      </h3>
      <div className="my-20 grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            href={`/articles/${article.article_id}`}
            key={article.article_id}
          >
            <div
              className="flex max-h-96 space-x-4 pb-10 md:space-x-8"
              key={article.article_id}
            >
              <Image
                src={"/image-retro-pcs.jpg"}
                height={200}
                width={200}
                alt="computer screen"
                className="h-92  w-1/3 object-cover lg:h-full"
              />
              <div className="image.png flex w-2/3 flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-md md:text font-bold text-black hover:text-orange-400">
                    {article.title}
                  </h3>
                  <p className="pt-1 text-xs italic text-gray-400">
                    Posted {article.created_at.toString().split("T")[0]}
                  </p>
                </div>

                <p className="md:text-md text-sm text-slate-800  hover:text-orange-400">
                  {article.body.slice(0, 150)}...
                </p>
                <div className="flex flex-row justify-between">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <p className="font-bold">{article.votes}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 fill-gray-400 "
                    >
                      <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                    </svg>
                    <p className="font-bold">{article.comment_count}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  let queryString: string;
  slug === "all" ? (queryString = "") : (queryString = `?topic=${slug}`);
  const articlesRes = await fetch(
    `https://nc-news-production.up.railway.app/api/articles${queryString}`
  );
  const articleData = (await articlesRes.json()) as { articles: Article[] };

  return {
    props: {
      articles: articleData.articles,
      slug,
    },
  };
};

