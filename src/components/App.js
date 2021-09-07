import video from "../data/video.js";
import Header from "./Header";
import CommentList from "./CommentList"
import {useState} from 'react'

function App() {
  console.log("Here's your data:", video);

  const comments = video.comments

  const [showComments, setShowComments] = useState(true)

  function commentToggle() {
    setShowComments(!showComments)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header video={video} commentToggle={commentToggle} showComments={showComments}/>
      
      {showComments ? <CommentList comments={comments}/> : <></>}

    </div>
  );
}

export default App;
