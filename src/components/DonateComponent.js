import { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import '../components/DonateComponent.css'
import CarouselComponent from "../components/Carousel";
import ModalPay from './ModalPayment';



export default class Donate extends Component {
    render() {
        return (
            <Container className="pt-5">
                <Row>
                    <Col lg='5' className="mr-3 mb-3">
                        <CarouselComponent />
                    </Col>
                    <Col lg='7' className="d-flex flex-column justify-content-center donate-content text-center">
                        <h3 className="donate-header">Кожен донат наближує нашу перемогу!</h3>
                        <p>Ваші донати дають змогу нам працювати більше та допомогти більшій кількості людей.
                            Кожна гривня - це їжа, пелюшка, одяг, візочок, аптечка - саме там, де потрібна найбільше</p>
                        <ModalPay />
                    </Col>
                </Row>
            </Container>
        );
    }

}