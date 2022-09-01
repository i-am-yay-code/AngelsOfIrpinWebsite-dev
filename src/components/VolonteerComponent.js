import { Component } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import '../components/VolonteerComponent.css'


export default class VolonteerWanted extends Component {

    render() {
        return (
            <Container className="my-5" id='join'>
                <Row className="volunteer-row d-flex align-items-center">
                    <Col lg="4" className="my-3 d-flex justify-content-center">
                        <img src={require("../assets/Girl.png")} alt='Дівчина з квітами' height="280px"></img>
                    </Col>
                    <Col lg='7'>
                        <h3 className="volunteer-header">Нам потрібні волонтери!</h3>
                        <p> Якщо <span className="volunteer-span">ти</span> відчуваєш, що допомагати людям - це твоє,
                            ми чекаємо на тебе. У нас кожен на своєму місці - <span className="volunteer-idea"> разом переможемо!</span></p>
                        <Button className="p-3 mb-4 volonteer-button" style={{ fontSize: '1.2rem' }} href="tel:+380960502525" >Приєднатися до команди</Button>
                    </Col>
                </Row>

            </Container>
        );
    }
}