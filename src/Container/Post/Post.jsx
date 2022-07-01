import {GridContainer} from "../../Components/GridContainer/GridContainer";
import { NavBar } from "../../Components/NavBar/NavBar";
import "./post.css";

export const Post = () => {
    return (
    <GridContainer
        row={12}
        column={12}
        bg="snow"
        height={100}>
        <NavBar />
        <div className="posts">
        </div>
    </GridContainer>);
}