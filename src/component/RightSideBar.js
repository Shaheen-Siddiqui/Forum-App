import { useContext } from "react";
import { ForumContext } from "../context/ForumContext";

export const RightSideBar = () => {
  const { mostUpvotePost, sortByDate } = useContext(ForumContext);
  return (
    <div className="right-side mt-3">
      <button
        className="btn btn-outline-primary btn-sm m-1"
        onClick={sortByDate}
      >
        Latest Post
      </button>
      <br />

      <button
        className="btn btn-outline-primary btn-sm m-1"
        onClick={mostUpvotePost}
      >
        Most Upvote Post
      </button>
    </div>
  );
};
