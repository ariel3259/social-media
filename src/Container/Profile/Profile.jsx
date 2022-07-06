import {GridContainer} from "../../Components/GridContainer/GridContainer"; 
import {NavBar} from "../../Components/NavBar/NavBar"; 

export const Profile = () => {
    return (
        <GridContainer
            row={12}
            column={12}
            bg="white"
            height={100}>
            <NavBar />
        </GridContainer>
    );
}