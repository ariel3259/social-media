import { Link } from "react-router-dom";

export const CardPost = ({title, body, username, id}) => {

    return(
        <div className="post">
            <h2 className="title">{title}</h2>
            <p className="body">{body}</p>
            <h3 className="username">
                <Link 
                    to={`/profile/${id}`} 
                    style={{textDecoration:"none"}}>
                    {username}
                </Link>
            </h3>
        </div>
    )
}