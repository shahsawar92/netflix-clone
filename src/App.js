import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Row from './Components/Row';
import request from './request';



function App() {
  return (
    <div className="App">
       {/* navbar */}
       <Navbar />
       
        {/* banner */}
        <Banner />
       {/* rows */}
        <Row isLargeRow title={"Netflix Originals"} fetchURL={request.fetchNetflixOriginals}></Row>
         <Row title={"Trending"} fetchURL={request.fetchTrending}></Row>
        <Row title={"TopRated"} fetchURL={request.fetchTopRated}></Row>
      <Row title={"Action Movies"} fetchURL={request.fetchActionMovies}></Row>
        <Row title={"Comedy Movies"} fetchURL={request.fetchComedyMovies}></Row>
        <Row title={"Horror Movies"} fetchURL={request.fetchHorrorMovies}></Row>
        <Row title={"Romance Movies"} fetchURL={request.fetchRomanceMovies}></Row>
        <Row title={"Documentries"} fetchURL={request.fetchDocumentries}></Row> {/*  */}
    </div>
  );
}

export default App;
