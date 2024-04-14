import { MagnifyingGlass } from 'react-loader-spinner'
import "semantic-ui-css/semantic.min.css"; // Import css library
import { Container, Header } from 'semantic-ui-react';
// import { Helmet } from 'react-Helmet';
// import "../assets/css/home.css"

function Home() {
  const { loading, error } = useQuery(QUERY_USERS);

 

  if (error) {
    throw Error(error);
  }

  if (loading) {
    return <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 300
      }}
    >
      <h2> <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#C0EFFF"
        color="brown"
      /></h2>
    </div>;
  }

  return (
    // *to be used at later date add  

    // <div
    //   style={{
    //     backgroundImage: `url(${homebackground})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     minHeight: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontFamily: 'Honk'
    //   }}
    // >
      <Container
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center'
        }}
      >
          
        <Header as="h1"  style={{ fontSize: '127px', fontWeight: 'bold', fontFamily: 'Honk'}}>
         Tavario Braswell
          <div className="image">
            <img src='../../images/temp.jpg' width={'120px'} alt="profile picture" />
          </div>
        </Header>
        <div style={{ textAlign: 'left', fontSize: '24px', fontamily: 'Arial' }}>
    <p>
        Hello, I'm Tavario Braswell. Recent graduate of UNCC Full-Stack Development Bootcamp. 
    </p>
        </div>
      </Container>
    
  );
}

export default Home;