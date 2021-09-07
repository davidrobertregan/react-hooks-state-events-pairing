import VidDetails from "./VidDetails"

function Header({ video, commentToggle, showComments }) {
    return (
    <div>
        <h1>
            React Today an Tomorrow and 90% Cleaner React With Hooks
        </h1>
        <VidDetails video={video} commentToggle={commentToggle} showComments={showComments}/>
    </div>
    )
}

export default Header