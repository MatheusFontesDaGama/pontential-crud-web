import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-awesome-styled-grid";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

const EdicaoView = () => {
    const { id } = useParams() 
    const { register, handleSubmit, formState: { erros }, reset } = useForm();

    const [desenvolvedor, setDesenvolvedor] = useState([]);
    const urlObterDesenvolvedor = `http://localhost:8080/developers/${id}`;
    
    useEffect(() => {
        axios.get(urlObterDesenvolvedor)
        .then((response) => {
            reset(response.data)
        })
        .catch(() => {})
    }, [])
    
    const url = `http://localhost:8080/developers/${id}`;
    const onSubmit = async data => await axios.put(url, data)
        .then(() => {
            console.log("desenvolvedor atualizada com sucesso!")
        })
        .catch(() => {
            console.log("erro ao atualizar desenvolvedor!")
        })

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>        
                    <Container>
                        <Row>
                            <Col>
                                <h2>Edição Desenvolvedor</h2>
                            </Col>
                            <Col>
                                <Link to="/">
                                    <button type="button">
                                        Home
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                        <Row style= {{ marginTop: '24px'}}>
                            <Col md={6} xs={12}>
                                <label>Nome:</label>
                                <input type="text" name="nome" {...register("nome")} value={desenvolvedor.nome} />
                            </Col>
                        </Row>
                        <Row style= {{ marginTop: '24px'}}>
                            <Col>
                                <label>Sexo:</label>
                                <Row>
                                    <input name="sexo" type="radio" id="sexo_m" value="M" {...register("sexo")} />
                                    <label for="sexo_m">Masculino</label>
                                </Row>
                                <Row>
                                    <input name="sexo" type="radio" id="sexo_f" value="F" {...register("sexo")}/>
                                    <label for="sexo_f">Feminino</label>
                                </Row>
        
                            </Col>
                            <Col>
                                <label>Idade:</label>
                                <input type="number" name="idade" {...register("idade")} value={desenvolvedor.idade}/>
                            </Col>
                            <Col>
                                <label>Data de nascimento:</label>
                                <input type="date" name="datanascimento" {...register("datanascimento")} value={desenvolvedor.datanascimento}/>
                            </Col>
                        </Row>
                        <Row style= {{ marginTop: '24px'}}>
                            <Col>
                                <label>Hobby:</label>
                                <input type="text" name="hobby" {...register("hobby")} value={desenvolvedor.hobby} />
                            </Col>
                        </Row>
                        <Row style= {{ marginTop: '24px'}}>
                            <button type="submit">Enviar</button>
                        </Row>
                    </Container>
                </form>
            </Container>
        </>
    )
}

export default EdicaoView