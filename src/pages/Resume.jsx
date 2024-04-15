// import { jsxDEV } from "react/jsx-dev-runtime";
import { Container, Header } from "semantic-ui-react";
import skills from '../images/skills.jpg';


const Resume = () => {
    return (
        <Container>
            <Header as="h1" style={{ fontSize: '100px', marginBottom: '30px' }}>
                My Skillset
            </Header>
            <div
                style={{
                    Image: `url(${skills})`,
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                </div>
        </Container>

    )
}

export default Resume;