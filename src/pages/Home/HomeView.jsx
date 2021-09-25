import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-awesome-styled-grid";
import { Link } from "react-router-dom";
import './Home.css';

const HomeView = () => {
    const [desenvolvedores, setDesenvolvedores] = useState([]);
    const url = `http://localhost:8080/developers`;

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setDesenvolvedores(response.data)
        })
        .catch(() => {})
    }, [])

    const handleDeleteDesenvolvedor = async (id) => {
        const urlDelete = `http://localhost:8080/developers/${id}`;

        await axios.delete(urlDelete);
        await axios.get(url)
        .then((response) => {
            setDesenvolvedores(response.data)
        })
        .catch(() => {})
      };

    return (
        <>
            <Container>
                <Row style={{ marginTop: '24px' }}>
                    <Col>
                        <h2>Desenvolvedores</h2>
                    </Col>
                    <Col>
                        <Link to="/cadastro">
                            <button type="button">
                                Cadastrar Desenvolvedor
                            </button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <table>
                            <thead>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Sexo</th>
                                <th>Hobby</th>
                                <th>Data de Nascimento</th>
                                <th>Excluir</th>
                            </thead>
                            <tbody>
                                {desenvolvedores.map((desenvolvedor) => (
                                    <tr>
                                        <td>{desenvolvedor.nome}</td>
                                        <td>{desenvolvedor.idade}</td>
                                        <td>{desenvolvedor.sexo}</td>
                                        <td>{desenvolvedor.hobby}</td>
                                        <td>{desenvolvedor.datanascimento}</td>
                                        <td>
                                            <button type="button" onClick={() => handleDeleteDesenvolvedor(desenvolvedor.id)}>
                                                Apagar
                                            </button>
                                            <Link to={{ pathname: `/edicao/${desenvolvedor.id}` }}>
                                                <button type="button">
                                                    Editar
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeView
