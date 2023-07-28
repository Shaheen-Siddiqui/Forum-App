import { useContext } from "react";
import { ForumPost } from "../component/ForumPost";
import { RightSideBar } from "../component/RightSideBar";
import { SideBar } from "../component/SideBar";
import { ForumContext } from "../context/ForumContext";

export const ForumListing = () => {
  const { forumPostData } = useContext(ForumContext);
  return (
    <div>
      <div className="left-sidebar-case">
        <SideBar />
      </div>

      <div className="post-main-case">
        <h2 className="latest-post-test">Latest Post</h2>
        {forumPostData?.map((posts) => {
          return <ForumPost posts={posts} key={posts.postId} />;
        })}
      </div>

      <div className="right-sidebar-case">
        <RightSideBar />
      </div>
    </div>
  );
};
