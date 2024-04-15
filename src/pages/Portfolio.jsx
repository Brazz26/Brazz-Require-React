import "semantic-ui-css/semantic.min.css"; // Import css
import { Container, Header } from "semantic-ui-react";


const Portfolio = () => {
    return (
        <Container>
            <div>
                <Header as="h1" style={{ fontSize: '100px', marginBottom: '30px' }}>
                    My Repositories
                </Header>
                <ul style={{display:'flex', fontSize: '46px'}}>
                    SQL Database<link>https://github.com/Brazz26/content-manager-sql.git</link>
                    NotePad<link>https://github.com/Brazz26/noteTaker-pad-express.git</link>
                    Weather App <link>https://github.com/Brazz26/Sunny-Day-Api.git</link>
                    Logo Maker<link>https://github.com/Brazz26/shape-shifter-logomker.git</link>
                    README Generator<link>https://github.com/Brazz26/xgenerator-reading-readme.git</link>
                </ul>
            </div>
        </Container>

    )
}
export default Portfolio;