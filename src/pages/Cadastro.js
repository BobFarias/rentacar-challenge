import React, { Component, } from 'react'
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import '../App.css';

import "react-datepicker/dist/react-datepicker.css";
import { pt } from 'date-fns/esm/locale';

import Header from './components/Header'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

registerLocale('pt', pt)



class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vagas: [],
            caixaVazia: [],
            placa: '',
            datachegada: '',
            datasaida: '',
            cadastro: false,
        };
    }

    // import da api
    componentDidMount() {
        const axios = require('axios');

        axios.get("https://5d6f13fb482b530014d2ddeb.mockapi.io/rent/vagas").then(res => {
            this.setState({ vagas: res.data })
        })
        return
    }
    
    // funcao para declarar o state dos input do cadastro
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // funcao para declarar o state dos input da hora e data da chegada do veiculo
    handleChangeDateChegada = date => {
        this.setState({ datachegada: date });
    }

    // funcao para declarar o state dos input da hora e data da saida do veiculo
    handleChangeDateSaida = date => {
        this.setState({ datasaida: date });
    }

    // post na api
    handleSubmit = event => {
        event.preventDefault();
        const axios = require('axios');

        let vagasVazias = [];

        this.state.vagas.forEach((item) => {
            if (item.carros.length == 0) {
                vagasVazias = vagasVazias.concat(item);
            } return
        })

        let IndexvagasVazias = vagasVazias.entries();
        IndexvagasVazias = IndexvagasVazias.next().value;
        IndexvagasVazias = IndexvagasVazias[1].id;

        const carro = {
            placa: this.state.placa,
            datachegada: this.state.datachegada,
            datasaida: this.state.datasaida, 
        }

        axios.post('https://5d6f13fb482b530014d2ddeb.mockapi.io/rent/vagas/' + IndexvagasVazias + '/carros', carro)
        .then(res => console.log(res.data));

        this.setState({cadastro: true});
        
        return 
        
    };

    render() {

        return (
            <Container>
                <div className="header">
                    <Header />
                </div>
                <Row>
                    <Col className="col-index-right">
                    </Col>
                    <Col className="col-index-left-cadastro">
                        <Col className="display-table">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Label>placa:
                                    <Form.Control name="placa" type='text' onChange={this.handleChange} />
                                </Form.Label>
                                <br />
                                <Form.Label>Data e Hora chegada:</Form.Label>
                                <br />
                                    <DatePicker
                                        selected={this.state.datachegada}
                                        onChange={this.handleChangeDateChegada}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={1}
                                        timeCaption="time"
                                        dateFormat="d MMMM, yyyy h:mm aa"
                                        locale="pt"
                                    />
                                <br />
                                <Form.Label>Data e hora da saída:</Form.Label>
                                <br />
                                    <DatePicker
                                        selected={this.state.datasaida}
                                        onChange={this.handleChangeDateSaida}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="time"
                                        dateFormat="d MMMM, yyyy h:mm aa"
                                        locale="pt"
                                    />
                                <br />
                                <br />
                                <Button type='submit'>Cadastrar</Button>
                                <br />
                                <br />
                                {this.state.cadastro ? <p>Cadastro realizado com sucesso. Volte para Home.</p> : null}
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Cadastro;
