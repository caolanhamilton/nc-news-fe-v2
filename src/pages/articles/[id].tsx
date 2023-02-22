import React, { useState } from "react";
import type { Comment } from "../../../types";
import { Article } from "../../../types";
import type { GetServerSideProps } from "next";
import { type NextPage } from "next";
import HeaderNav from "../components/HeaderNav";
import CommentsListContainer from "../components/CommentsListContainer";
import ArticleMainContent from "../components/ArticleMainContent";
import ArticleSubheadings from "../components/ArticleSubheadings";
import { sortByDate } from "../../utills/sortByDate";

type Props = {
  article: Article;
  comments: Comment[];
};

const Article: NextPage<Props> = ({ article, comments }) => {
  const [commentsExpanded, setCommentsExpanded] = useState(false);
  return (
    <div className="mx-4 md:mx-20 lg:mx-40">
      <HeaderNav />
      <div className="flex flex-col items-center justify-center mb-20">
        <div className="flex-col items-center justify-center space-y-10 md:w-2/3">
          <h1 className="text-4xl font-extrabold  md:text-5xl">
            {article.title}
          </h1>
          <ArticleSubheadings article={article}></ArticleSubheadings>
          <ArticleMainContent articleBody={article.body}></ArticleMainContent>
          <CommentsListContainer
            comments={comments}
            commentsExpanded={commentsExpanded}
            setCommentsExpanded={setCommentsExpanded}
            articleId={article.article_id}
          ></CommentsListContainer>
        </div>
      </div>
    </div>
  );
};

export default Article;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  const articlesRes = await fetch(
    `https://nc-news-production.up.railway.app/api/articles/${id}`
  );

  const articleData = (await articlesRes.json()) as { articleObj: Article };

  const commentRes = await fetch(
    `https://nc-news-production.up.railway.app/api/articles/${id}/comments`
  );

  const commentsData = (await commentRes.json()) as { comments: Comment[] };

  return {
    props: {
      article: articleData.articleObj,
      comments: sortByDate(commentsData.comments),
    },
  };
};

