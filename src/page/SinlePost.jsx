import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ForumContext } from "../context/ForumContext";
import { ForumPost } from "../component/ForumPost";

export const SinglePost = () => {
  const { forumPostData } = useContext(ForumContext);

  const { postCommentId } = useParams();

  let postWithComments = forumPostData.find(
    (item) => item.postId === postCommentId
  );

  const singlePostComment = postWithComments.comments;
  return (
    <>
      <button className="btn btn-outline-dark">
        <Link to="/">
          <i class="fas fa-arrow-left"></i>
        </Link>
      </button>

      <ForumPost posts={postWithComments} />

      {singlePostComment.length &&
        singlePostComment.map((item) => {
          return (
            <div>
              <div className="user-comment-case">
                <div>
                  <img src={item?.picUrl} alt="user" className="image-user" />
                </div>
                <div className="comment-info">
                  <p>
                    <strong>{item?.name}</strong> {item?.username}
                  </p>
                  <span>Replying to @{postWithComments.username}</span>
                  <br />
                  <strong>{item?.comment}</strong>
                  <div className="cmt-icon">
                    <b>&#x2764;</b>
                    <b>&#x1F4AC;</b>
                    <b>&#x1F4E4;</b>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
