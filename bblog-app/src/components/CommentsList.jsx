import { UserCircleIcon } from "@heroicons/react/24/outline";
const CommentsList = ({ comments }) => (
    <div className="w-100 ">
        {comments.map(comment => (
            <div key={comment.postedBy + ': ' + comment.text}>
                <div className="flex mt-2"><UserCircleIcon style={{ width: '20px' }} />
                    <h4 className="font-semibold mx-1">{comment.postedBy}</h4></div>
                <p className="italic opacity-90 text-gray-600 border-b">{comment.text}</p>
            </div>
        ))}

    </div>
);

export default CommentsList