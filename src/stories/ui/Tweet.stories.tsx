import { Tweet as TweetComponent } from "../../ui/Tweet";

export default {
  title: "ui",
  component: TweetComponent,
};

export const Tweet = () => (
  <div className="w-full bg-black max-w-[600px]">
    <TweetComponent
      text="My First Tweet!"
      createdAt="2022-04-02T16:56:59.867Z"
      likes={3}
      comments={0}
      reshare={1}
      author="Daveinoc"
    />
  </div>
);
