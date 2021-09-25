import axios from "axios";
import { Col, Container, Row } from "react-awesome-styled-grid"
import { useForm } from "react-hook-form"

const CadastroView = () => {

    const { register, handleSubmit, formState: { erros } } = useForm();
    
    const url = "http://localhost:8080/developers";
    const onSubmit = async data => await axios.post(url, data)
        .then(() => {
            console.log("desenvolvedor cadastrado!")
        })
        .catch(() => {
            console.log("erro ao cadastrar usuario")
        })

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>        
                    <Container>
                        <Row>
                            <Col>
                                <h2>Cadastro de Desenvolvedores</h2>
                            </Col>
                        </Row>
                        <Row style= {{ marginTop: '24px'}}>
                            <Col md={6} xs={12}>
                                <label>Nome:</label>
                                <input type="text" name="nome" {...register("nome")} />
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
                                <input type="number" name="idade" {...register("idade")} />
                            </Col>
                            <Col>
                                <label>Data de nascimento:</label>
                                <input type="date" name="datanascimento" {...register("datanascimento")} />
                            </Col>
                        </Row>
                        <Row style= {{ marginTop: '24px'}}>
                            <Col>
                                <label>Hobby:</label>
                                <input type="text" name="hobby" {...register("hobby")} />
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

export default CadastroView