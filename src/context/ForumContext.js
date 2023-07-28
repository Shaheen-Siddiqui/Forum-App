import { createContext, useState } from "react";
import { forumData } from "../database/ForumData";

export const ForumContext = createContext(null);
export const ForumContextProvider = ({ children }) => {
  const [votes, setVotes] = useState(0);

  const [forumPostData, setForumPostData] = useState(forumData.posts);

  const upVoteOnPost = (postId) => {
    setForumPostData((forumPostData) =>
      forumPostData.map((item) =>
        postId === item.postId ? { ...item, upvotes: item.upvotes + 1 } : item
      )
    );
  };

  const downvotesOnPost = (postId) => {
    setForumPostData((forumPostData) =>
      forumPostData.map((item) =>
        postId === item.postId ? { ...item, upvotes: item.upvotes - 1 } : item
      )
    );
  };

  const bookMarked = (postId) => {
    setForumPostData((forumPostData) =>
      forumPostData.map((item) =>
        postId === item.postId ? { ...item, isBookmarked: true } : item
      )
    );
  };

  const mostUpvotePost = () =>
    setForumPostData((forumPostData) =>
      [...forumPostData].sort((a, b) => b.upvotes - a.upvotes)
    );

  const sortByDate = () =>
    setForumPostData((forumPostData) =>
      [...forumPostData].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      )
    );
  return (
    <ForumContext.Provider
      value={{
        downvotesOnPost,
        forumPostData,
        setForumPostData,
        bookMarked,
        votes,
        setVotes,
        upVoteOnPost,
        mostUpvotePost,
        sortByDate
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
