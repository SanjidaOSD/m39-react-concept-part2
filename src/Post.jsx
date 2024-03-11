export default function Post({post}){
const {userId, id,title,body} = post;

    return(
        <div className="post">
            <h3>Title:{userId}</h3>
            <p>User Id:{id}</p>
            <p>Id: {title}</p>
            <p>Body:{body}</p>
        </div>
    )
}