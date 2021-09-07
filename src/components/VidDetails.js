import Button from "./Button"
import { useState } from 'react'

function VidDetails( {video, commentToggle, showComments}) {

    const [upVotes, setUpVotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)

    function addUpVote() {
        setUpVotes(upVotes + 1)
    }

    function addDownVote() {
        setDownVotes(downVotes + 1)
    }

    function commentButtonText(){
        let text
        showComments ? text = "Hide Comments" : text = "Show Comments"
        return text
    }

    return (
        <div>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <div id="vote-buttons">
                <Button onHandleClick={addUpVote} text={upVotes + '👍'} />
                <Button onHandleClick={addDownVote} text={downVotes + '👎'} />
            </div>
            <div id="hide-comments">
                <Button onHandleClick={commentToggle}text={commentButtonText()} />
            </div>
        </div>
    )
}

export default VidDetails