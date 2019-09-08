import React, { Component, Fragment } from 'react'
import * as moment from 'moment';

import Modal from './components/Modal.js'
import Header from './components/Header'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

class Pagamento extends Component {

    // declaracao de states
    constructor(props) {
        super(props);
        this.state = {
            vagas: [],
            valor: [],
            placa: [],
            datachegada: [],
            datasaida: [],
            duracao: [],
            idVaga: [],
            id: [],
            modalclick: false,
          } 
    
        this.gerarRelatorio = this.gerarRelatorio.bind(this);
      }
    
    // funcao de get dos dados da api
    componentDidMount() {
        const axios = require('axios');

        axios.get("https://5d6f13fb482b530014d2ddeb.mockapi.io/rent/vagas").then(res => {
            this.setState({ vagas: res.data })
        })
        return
    }

    // funcao que esta recebendo, como parametro, os dados de cada placa listada
    gerarRelatorio = (e) => {
        // correcao do fuso horario
        const c = moment(e.datachegada).utcOffset("-03:00").format();
        const s = moment(e.datasaida).utcOffset("-03:00").format();

        // calculo para ver a duracao do estacionamento
        const dataHoraChegada = new moment(c);
        const dataHoraSaida = new moment(s);

        const duracao = moment.duration(dataHoraSaida.diff(dataHoraChegada)).as('hours');
        const HoraEstacionado = Math.floor(duracao);

        // calculo para ver o seu custo com as regras
        const horasExtras = HoraEstacionado - 3;
        let ValorEstacionamento = 0;


        if(HoraEstacionado <= 3){
            ValorEstacionamento = 7;
        } else {
            ValorEstacionamento = 7 + (horasExtras * 3)
        }

        this.setState({valor: ValorEstacionamento, placa: e.placa, datachegada: c, datasaida:  s, duracao: HoraEstacionado, idVaga: e.caixaId,  modalclick: true, id: e.id });
    }


    // gera lista com os carros que estao nas vagas ocupadas
    getvagaOcupadas() {

        let vagaOcupadas = [];

        this.state.vagas.forEach((item) => {
            if (item.carros.length !== 0) {
                vagaOcupadas = vagaOcupadas.concat(item);
            }
        })


        return(
            <Fragment>
                <ListGroup>
                    {vagaOcupadas.map(carros => 
                        <ListGroup.Item action onClick={() => this.gerarRelatorio(carros.carros[0])} key={carros.id}>
                            {carros.carros[0].placa}
                        </ListGroup.Item>)
                    }
                </ListGroup>
            </Fragment>)
    }


    render() {

        const data = {
            valor: this.state.valor,
            placa: this.state.placa,
            datachegada: this.state.datachegada,
            datasaida: this.state.datasaida,
            duracao: this.state.duracao,
            idVaga: this.state.idVaga,
            id: this.state.id,
        }
        
        return (
            <Container>
                <div className="header">
                    <Header />
                </div>
                <Row>
                    <Col className="col-index-right">
                    </Col>
                    <Col className="col-index-left-cadastro">
                            <p>Selecione a placa para gerar relátorio e pagamento:</p>
                            <div className="container data_Vaga">
                                {this.getvagaOcupadas()}
                                <br />
                                <br />
                                {this.state.modalclick ? <Modal data={data} /> : null}
                            </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Pagamento;