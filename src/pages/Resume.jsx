import { jsxDEV } from "react/jsx-dev-runtime";
import { Container, Header } from "semantic-ui-react";
// import Resume from './src/images/Resume.png';


const Resume = () => {
    return jsxDEV(Container, { children:
        <Container>
            <Header as="h1" style={{ fontSize: '100px', marginBottom: '30px' }}>
                My Skillset
            </Header>
            {/* <div
                style={{
                    Image: `url(${Resume})`,
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}> */}

                {/* </div> */}
        </Container>}

    )
}

export default Resume;