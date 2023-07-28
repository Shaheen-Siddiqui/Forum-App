import { useContext } from "react";
import { Link } from "react-router-dom";
import { ForumContext } from "../context/ForumContext";

export const ForumPost = ({ posts }) => {
  const {
    username,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    postId,
    isBookmarked,
    createdAt
  } = posts;

  const isMoreThanDownvotes = upvotes - downvotes;

  const { upVoteOnPost, downvotesOnPost, bookMarked } = useContext(
    ForumContext
  );

  return (
    <div className="single-post-case">
      <div className="votes">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            upVoteOnPost(postId);
          }}
        >
          &#9650;
        </button>
        <strong>
          {isMoreThanDownvotes ? upvotes - downvotes : downvotes - upvotes}
        </strong>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            downvotesOnPost(postId);
          }}
        >
          &#9660;
        </button>
      </div>
      <div className="post-info">
        <p className="posted-user-name">
          <span className="pill">&#8226;</span>

          <span>
            posted by @{username} &#8226; {createdAt}
          </span>
        </p>
        <h3>{post}</h3>
        <div className="issue-btn">
          {tags.map((postTags, index) => {
            return (
              <button key={index} className="btn  text-primary m-1 btn-sm">
                {postTags}
              </button>
            );
          })}
        </div>
        <div>
          {postDescription}
          <hr />
          <div className="post-icon">
            <i className="fas fa-share"></i>

            <i
              className="fas fa-bookmark"
              onClick={() => bookMarked(postId)}
              style={{ color: isBookmarked ? "red" : "gray" }}
            ></i>
            <Link to={`/${postId}`}>
              <i className="fas fa-comment"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
