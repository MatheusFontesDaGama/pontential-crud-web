import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-awesome-styled-grid";
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

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>Desenvolvedores</h2>
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
                            </thead>
                            <tbody>
                                {desenvolvedores.map((desenvolvedor) => (
                                    <tr>
                                        <td>{desenvolvedor.nome}</td>
                                        <td>{desenvolvedor.idade}</td>
                                        <td>{desenvolvedor.sexo}</td>
                                        <td>{desenvolvedor.hobby}</td>
                                        <td>{desenvolvedor.datanascimento}</td>
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
