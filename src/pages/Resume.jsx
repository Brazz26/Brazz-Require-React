import { Container, Header } from "semantic-ui-react";
import Resume from '../../public/images/Resume.jpg';


const resumePage = () => {
    return (
        <Container>
            <Header as="h1" style={{ fontSize: '100px', marginBottom: '30px' }}>
                My Resume
            </Header>
            <div
                style={{
                    Image: `url(${Resume})`,
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    
                </div>
        </Container>

    )
}

export default Resume