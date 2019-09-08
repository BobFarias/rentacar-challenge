import React, { Component, Fragment } from 'react'
import './App.css';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



import Header from './pages/components/Header'



class App extends Component {

  state = {
    vagas: [],
  }

  // import da api
  componentWillMount() {  
    const axios = require('axios');

    axios.get("https://5d6f13fb482b530014d2ddeb.mockapi.io/rent/vagas").then(res=> {
      this.setState({vagas: res.data })
    })

  }

  // funcao de contagem da quantidade de vagas
  getvagasDisponiveis(){
    
    let vagas_ocupadas = 0;
    let vagas_livres = 0;
    let total_vagas = this.state.vagas.length;
    
      this.state.vagas.forEach((item)=>{
        if(item.carros.length == 0) {
          vagas_livres++
        } else {
          vagas_ocupadas++
        }
      })
    
    return (<Fragment>
              <p>Total de vagas: {total_vagas}</p>
              <p>Vagas ocupadas: {vagas_ocupadas}</p>
              <p>Vagas disponíveis: {vagas_livres}</p>
            </Fragment>
    );
  }

  

  render() {  
    return (
      <Container>
        <div className="header">
          <Header />
        </div>
        <Row>
          <Col className="col-index-right">
          </Col>
          <Col className="col-index-left-home">
            <Col className="carros">
              {this.getvagasDisponiveis()}
            </Col>
            <Col>
              <Link to="/cadastro"><Button className="button-vsoft" type="button">Cadastrar novo veículo</Button></Link>
              <br/>
              <Link to="/pagamento"><Button className="button-vsoft" type="button">Realizar pagamento</Button></Link>
            </Col>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;
