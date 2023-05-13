const CommentsList =({comments})=>(
    <div className="w-100 border-b pb-2 border-black">
    {comments.map(comment =>(
         <div  key={comment.postedBy + ': ' + comment.text}>
         <div className="flex">
         <h4 className="font-semibold mr-4 w-20 my-1">{comment.postedBy}</h4>
         <p className="italic opacity-90 text-gray-600">{comment.text}</p>
         </div>
     </div>
    ))}
    
    </div>
);

export default CommentsList