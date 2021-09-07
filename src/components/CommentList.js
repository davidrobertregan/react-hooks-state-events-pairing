import Comment from "./Comment"

function CommentList( { comments }) {


    return (
        <div id="comments">
            <h2>{comments.length} Comments</h2>
            {comments.map(c => <Comment key={c.id}user={c.user} comment={c.comment} />)}
        </div>
    )
}

export default CommentList