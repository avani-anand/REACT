import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';


function App() {
  return(
    <div className='main'>

<div className='text-danger'>mohan</div>

      <Header/>
     
     <Container  fluid>
        hello miss avni anand
     </Container>

      
      <Footer/>


    </div>
  )
  
}

export default App;


function Card(params) {
  return(
    <div className="cardItems">Card Div</div>
  )
}
