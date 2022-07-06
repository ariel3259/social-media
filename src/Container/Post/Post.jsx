import {GridContainer} from "../../Components/GridContainer/GridContainer";
import { NavBar } from "../../Components/NavBar/NavBar";
import "./post.css";
import { CardPost } from "../../Components/CardPost/CardPost";
import { useState, useReducer, useEffect } from "react";
import {Field} from "../../Components/Field/Field";
import * as PostAction from "../../Actions/PostActions";
import {postReducer, initialState} from "../../Reducers/PostReducers";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export const Post = () => {


    const url = "https://api-social-media-1.herokuapp.com/api2/post";
    const token = localStorage.getItem("authorization");
    const idUser = localStorage.getItem("idUser");

    //states
    const [styleModal, setStyleModal] = useState("modal-close");
    const [post, dispatch] = useReducer(postReducer, initialState);
    const [index, setIndex] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);    
    const navigate = useNavigate();
    


    //events
    const onClickShowModal = () => setStyleModal("modal-open");
    const onClickCloseModal = () => setStyleModal("modal-close");
    const onChangeTitle = (e) => dispatch(PostAction.actionChangeTitle(e.target.value));
    const onChangeBody = (e) => dispatch(PostAction.actionChangeBody(e.target.value));
    const onChangeIndex = () => setIndex((prevIndex) => prevIndex + 1);
    
    
    //get all posts
    const onChangePosts = async () => {
        const request = await fetch(url + `?index=${index}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        if(request.status === 401 || request.status === 403 || request.status >= 500){
            navigate("/");
        }
        const response = await request.json();
        if(index <= response.totalPage){
            setPosts((prevPosts) => prevPosts.concat(response.posts));
        } else{
            setLoading(false);
        }
    }
   
    //create a post
    const onSubmitPost = async (e) => {
        e.preventDefault();
        const data = JSON.stringify(post);
        const request = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization":  token,
                "Content-Type": "application/json"
            },
            body: data
        });
        if(request.status === 401 || request.status === 403 || request.status >= 500){
            navigate("/");
        }
    }

    useEffect(() => {
        dispatch(PostAction.actionChangeIdUser(localStorage.getItem("idUser")));
        onChangePosts().then(() => console.log("posts loaded"));
    }, [index]);
 
    const postRenderedList = posts.map(post => (
        <CardPost 
        title={post.title}
        body={post.body}
        username={post.user.username}
        key={Math.random()}/>
    ));

    return (
    <GridContainer
        row={12}
        column={12}
        bg="snow"
        height={100}>
        <NavBar>
            <li onClick={onClickShowModal}>
                <label style={{cursor:"pointer"}}>Create Post</label>
            </li>
                { 
                    loading ?
                    <li
                        style={{cursor:"pointer"}}
                        onClick={onChangeIndex}>
                        Show more posts
                    </li>: 
                    <li 
                        style={{cursor:"default"}}>
                            There're no more posts
                    </li>
                }
        </NavBar>
        <div className={styleModal} style={{transition:"all 0.2s !important"}}>
            <div className="modal-header">
                <h2>Create post</h2>
                <a onClick={onClickCloseModal}>X</a>
            </div>
            <div className="modal-body">
                <form 
                    style={{display:"flex", flexDirection: "row", flexWrap:"wrap", justifyContent:"center"}}
                    onSubmit={onSubmitPost}>
                    <Field 
                        name="Title"
                        type="text"
                        event={onChangeTitle}/>
                    <Field 
                        name="Body"
                        type="Text"
                        event={onChangeBody}/>
                    <button className="btn-post" 
                        type="submit">
                        Post
                    </button>
                </form>
            </div>
        </div>
        <div className="posts">
            {postRenderedList}
        </div>
        
    </GridContainer>);
}