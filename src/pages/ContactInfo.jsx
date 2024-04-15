import "semantic-ui-css/semantic.min.css"; // Import css
import { Container, Header } from "semantic-ui-react";

const contactMe = () => {
    return (
        <div>
            <Container
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "20px",
                    borderRadius: "10px",
                    textAlign: "center"
                }}>
                <Header as="h1" style={{ fontSize: "50px", marginBottom: "40px" }}>
                    Here's my contact information:
                    <ul>
                        Email: Tavariobraswell@gmail.com <link>Tavariobraswell@gmail.com</link>
                        GitHub: Brazz26 <link>www.GitHub.com/Brazz26</link>
                        LinkedIn: Tavario Braswell <link>https://www.linkedin.com/in/tavario-braswell-1b6733b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIe0M0WLRR6GucjtRhVafHw%3D%3D</link>
                    </ul>
                </Header>
            </Container>
        </div>
    )
}

export default ContactInfo;