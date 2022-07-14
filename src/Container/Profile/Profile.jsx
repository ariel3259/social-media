import {GridContainer} from "../../Components/GridContainer/GridContainer"; 
import {NavBar} from "../../Components/NavBar/NavBar"; 
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardPost } from "../../Components/CardPost/CardPost";
import "./profile.css";

export const Profile = () => {
    
    const {idUser} = useParams();
    const token = localStorage.getItem("authorization");
    const navigate = useNavigate();
    const [index, setIndex] = useState(1);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const onChangeIndex = () => setIndex((prevIndex) => prevIndex + 1 );
    const onChangePosts = async () => {
        const request = await fetch(`https://api-social-media-1.herokuapp.com/api2/post/${idUser}?index=${index}`,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        if(request.status >= 401) {
            localStorage.removeItem("username");
            localStorage.removeItem("authorization");
            localStorage.removeItem("idUser");
            navigate("/");
        }
        const response = await request.json();
        console.log(response.posts);
        if(loading > response.totalPages) setLoading(false);
        await setPosts(posts.concat(response.posts));
    }

    useEffect(() => {
        onChangePosts().then(() => console.log("comments loaded"));
    }, [index]);

    const listPosts = posts?.map((post) => 
        <CardPost 
            title={post.title}
            body={post.body}
            id={post.user.id}
            username={post.user.username}
            key={post.id}/>
    );

    const morePosts = loading ? 
    <li
        style={{cursor: "pointer"}}
        onClick={onChangeIndex}>
        Get more posts
    </li> : 
    <li 
        style={{cursor: "none"}}>
        There're no more posts
    </li>;

    return (
        <GridContainer
            row={12}
            column={12}
            bg="white"
            height={100}>
            <NavBar>
                {morePosts}
            </NavBar>

            <div className="description">
                {listPosts}
            </div>
        </GridContainer>
    );
}