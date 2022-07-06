import { GridContainer } from "../../Components/GridContainer/GridContainer"
import { NavBar } from "../../Components/NavBar/NavBar"

export const UserPosts = () => {

    return(
        <GridContainer
            row={12}
            column={12}
            bg="snow"
            height={100}>
            <NavBar />
        </GridContainer>
    )
}