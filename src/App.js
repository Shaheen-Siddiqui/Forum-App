import "./styles.css";
import { ForumListing } from "./page/ForumListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SinglePost } from "./page/SinlePost";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ForumListing />} />
          <Route path="/:postCommentId" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
