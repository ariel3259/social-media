import {GridContainer} from "../../Components/GridContainer/GridContainer";
import { NavBar } from "../../Components/NavBar/NavBar";
import "./post.css";
import { CardPost } from "../../Components/CardPost/CardPost";
import { useState, useReducer, useEffect } from "react";
import {Field} from "../../Components/Field/Field";
import * as PostAction from "../../Actions/PostActions";
import {postReducer, initialState} from "../../Reducers/PostReducers";

export const Post = () => {


    const [styleModal, setStyleModal] = useState("modal-close");
    const [post, dispatch] = useReducer(postReducer, initialState);    

    useEffect(() => {
        dispatch(PostAction.actionChangeIdUser(localStorage.getItem("idUser")));
    }, [dispatch, PostAction]);

    const onClickShowModal = () => setStyleModal("modal-open");
    const onClickCloseModal = () => setStyleModal("modal-close");
    const onChangeTitle = (e) => dispatch(PostAction.actionChangeTitle(e.target.value));
    const onChangeBody = (e) => dispatch(PostAction.actionChangeBody(e.target.value));
    const onSubmitPost = (e) => {
        e.preventDefault();
    }


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
            <CardPost 
                title="Lorem"
                body="                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, corrupti magni fugit qui, aperiam cupiditate maiores dolores hic sed odio rem error ratione expedita ipsum officiis saepe! Doloremque, eius quo.
                Odit beatae obcaecati vitae quis velit aliquid quidem rerum officiis omnis eius, odio facilis itaque, accusamus sequi cum iure est, id perferendis dicta inventore accusantium. Ducimus veritatis nulla ipsa ea.
                Autem magnam doloremque, sequi aspernatur accusamus eveniet tempora repellendus eligendi accusantium necessitatibus beatae neque ducimus iste deleniti consectetur cum quaerat, quibusdam nemo eum distinctio totam quas. Laborum ut vitae adipisci!"
                idUser={1}
                username="ariel3259"/>
                <CardPost 
                title="Lorem"
                body="                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, corrupti magni fugit qui, aperiam cupiditate maiores dolores hic sed odio rem error ratione expedita ipsum officiis saepe! Doloremque, eius quo.
                Odit beatae obcaecati vitae quis velit aliquid quidem rerum officiis omnis eius, odio facilis itaque, accusamus sequi cum iure est, id perferendis dicta inventore accusantium. Ducimus veritatis nulla ipsa ea.
                Autem magnam doloremque, sequi aspernatur accusamus eveniet tempora repellendus eligendi accusantium necessitatibus beatae neque ducimus iste deleniti consectetur cum quaerat, quibusdam nemo eum distinctio totam quas. Laborum ut vitae adipisci!"
                idUser={1}
                username="ariel3259"/>
                <CardPost 
                title="Lorem"
                body="                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, corrupti magni fugit qui, aperiam cupiditate maiores dolores hic sed odio rem error ratione expedita ipsum officiis saepe! Doloremque, eius quo.
                Odit beatae obcaecati vitae quis velit aliquid quidem rerum officiis omnis eius, odio facilis itaque, accusamus sequi cum iure est, id perferendis dicta inventore accusantium. Ducimus veritatis nulla ipsa ea.
                Autem magnam doloremque, sequi aspernatur accusamus eveniet tempora repellendus eligendi accusantium necessitatibus beatae neque ducimus iste deleniti consectetur cum quaerat, quibusdam nemo eum distinctio totam quas. Laborum ut vitae adipisci!"
                idUser={1}
                username="ariel3259"/>
                <CardPost 
                title="Lorem"
                body="                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, corrupti magni fugit qui, aperiam cupiditate maiores dolores hic sed odio rem error ratione expedita ipsum officiis saepe! Doloremque, eius quo.
                Odit beatae obcaecati vitae quis velit aliquid quidem rerum officiis omnis eius, odio facilis itaque, accusamus sequi cum iure est, id perferendis dicta inventore accusantium. Ducimus veritatis nulla ipsa ea.
                Autem magnam doloremque, sequi aspernatur accusamus eveniet tempora repellendus eligendi accusantium necessitatibus beatae neque ducimus iste deleniti consectetur cum quaerat, quibusdam nemo eum distinctio totam quas. Laborum ut vitae adipisci!"
                idUser={1}
                username="ariel3259"/>
                <CardPost 
                title="Lorem"
                body="                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, corrupti magni fugit qui, aperiam cupiditate maiores dolores hic sed odio rem error ratione expedita ipsum officiis saepe! Doloremque, eius quo.
                Odit beatae obcaecati vitae quis velit aliquid quidem rerum officiis omnis eius, odio facilis itaque, accusamus sequi cum iure est, id perferendis dicta inventore accusantium. Ducimus veritatis nulla ipsa ea.
                Autem magnam doloremque, sequi aspernatur accusamus eveniet tempora repellendus eligendi accusantium necessitatibus beatae neque ducimus iste deleniti consectetur cum quaerat, quibusdam nemo eum distinctio totam quas. Laborum ut vitae adipisci!"
                idUser={1}
                username="ariel3259"/>
                <CardPost 
                title="Lorem"
                body="                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, corrupti magni fugit qui, aperiam cupiditate maiores dolores hic sed odio rem error ratione expedita ipsum officiis saepe! Doloremque, eius quo.
                Odit beatae obcaecati vitae quis velit aliquid quidem rerum officiis omnis eius, odio facilis itaque, accusamus sequi cum iure est, id perferendis dicta inventore accusantium. Ducimus veritatis nulla ipsa ea.
                Autem magnam doloremque, sequi aspernatur accusamus eveniet tempora repellendus eligendi accusantium necessitatibus beatae neque ducimus iste deleniti consectetur cum quaerat, quibusdam nemo eum distinctio totam quas. Laborum ut vitae adipisci!"
                idUser={1}
                username="ariel3259"/>
                <CardPost 
                title="Lorem"
                body="                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, corrupti magni fugit qui, aperiam cupiditate maiores dolores hic sed odio rem error ratione expedita ipsum officiis saepe! Doloremque, eius quo.
                Odit beatae obcaecati vitae quis velit aliquid quidem rerum officiis omnis eius, odio facilis itaque, accusamus sequi cum iure est, id perferendis dicta inventore accusantium. Ducimus veritatis nulla ipsa ea.
                Autem magnam doloremque, sequi aspernatur accusamus eveniet tempora repellendus eligendi accusantium necessitatibus beatae neque ducimus iste deleniti consectetur cum quaerat, quibusdam nemo eum distinctio totam quas. Laborum ut vitae adipisci!"
                idUser={1}
                username="ariel3259"/>
                <CardPost 
                title="Lorem"
                body="                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, corrupti magni fugit qui, aperiam cupiditate maiores dolores hic sed odio rem error ratione expedita ipsum officiis saepe! Doloremque, eius quo.
                Odit beatae obcaecati vitae quis velit aliquid quidem rerum officiis omnis eius, odio facilis itaque, accusamus sequi cum iure est, id perferendis dicta inventore accusantium. Ducimus veritatis nulla ipsa ea.
                Autem magnam doloremque, sequi aspernatur accusamus eveniet tempora repellendus eligendi accusantium necessitatibus beatae neque ducimus iste deleniti consectetur cum quaerat, quibusdam nemo eum distinctio totam quas. Laborum ut vitae adipisci!"
                idUser={1}
                username="ariel3259"/>
                <CardPost 
                title="Lorem"
                body="                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, corrupti magni fugit qui, aperiam cupiditate maiores dolores hic sed odio rem error ratione expedita ipsum officiis saepe! Doloremque, eius quo.
                Odit beatae obcaecati vitae quis velit aliquid quidem rerum officiis omnis eius, odio facilis itaque, accusamus sequi cum iure est, id perferendis dicta inventore accusantium. Ducimus veritatis nulla ipsa ea.
                Autem magnam doloremque, sequi aspernatur accusamus eveniet tempora repellendus eligendi accusantium necessitatibus beatae neque ducimus iste deleniti consectetur cum quaerat, quibusdam nemo eum distinctio totam quas. Laborum ut vitae adipisci!"
                idUser={1}
                username="ariel3259"/>
                
        </div>
    </GridContainer>);
}