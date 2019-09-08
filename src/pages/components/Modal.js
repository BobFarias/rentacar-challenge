import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import * as moment from 'moment';


export class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pagamento: false,
        }
    }

    // funcao para definir no banco de dados o pagamento como true apos o metodo de pagamento
    realizarPagamento(e) {
        const axios = require('axios');

        const brinquedo = {
            pagamento: true,
        }

        axios.put("https://5d6f13fb482b530014d2ddeb.mockapi.io/rent/vagas/" + e.id + '/carros/' + e.id, brinquedo)
            .then(this.setState({ pagamento: true })
            ).catch(error => {
                console.log(error.response)
            });
    }

    // funcao para retirar do banco de dados o carro registrado na vaga
    limpandoBd(e){

        const axios = require('axios');

        if (this.state.pagamento === true) {
            axios.delete('https://5d6f13fb482b530014d2ddeb.mockapi.io/rent/vagas/' + e.id + '/carros/' + e.id)
                .then(res => console.log(res.data));
        } else {
            return
        }


    }

    render() {

        const correcaoDataChegada = moment(this.props.data.datachegada).format("D/M/YYYY, h:mm:ss a");
        const correcaoDataSaida = moment(this.props.data.datasaida).format("D/M/YYYY, h:mm:ss a");

        return (
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <p>Placa do veículo: {this.props.data.placa}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Data de chegada: {correcaoDataChegada}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Data de saída: {correcaoDataSaida}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Duração do tempo estacionado: {this.props.data.duracao} horas</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Valor cobrado: {this.props.data.valor} reais</p>
                </ListGroup.Item>
                <button onClick={() => this.realizarPagamento(this.props.data)}>
                    Realizar Pagamento
                </button>
                {this.state.pagamento ? this.limpandoBd(this.props.data) : null}
                {this.state.pagamento ? <p>Pagamento realizado com sucesso. Volte para Home.</p> : null}
            </ListGroup>
        );
    }
}

export default Modal;