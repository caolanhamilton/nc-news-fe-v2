import MainStory from "./MainStory";
import NewStories from "./NewStories";
import type { Article } from "../../../types";

type Props = {
  mainStory: Article | undefined;
  newStories: Article[];
};

export default function MainSection({ mainStory, newStories }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-10 my-20">
      <MainStory mainStory={mainStory} />
      <NewStories newStories={newStories} />
    </div>
  );
}
