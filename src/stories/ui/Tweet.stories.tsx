import { Tweet as TweetComponent } from "../../ui/Tweet";

export default {
  title: "ui",
  component: TweetComponent,
};

export const Tweet = () => (
  <div className="w-full bg-black max-w-[600px]">
    <TweetComponent />
  </div>
);
