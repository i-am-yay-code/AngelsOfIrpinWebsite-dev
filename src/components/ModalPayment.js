import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../components/ModalPayment.css'

const ModalPay = (args) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary p-3" style={{ fontSize: '1.2rem' }} onClick={toggle}>Підтримайте нас</Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Пожертва</ModalHeader>
                <ModalBody>

                    <img src={require('../assets/qr.jpg')} alt='QR code for payment' width='40%'></img>
                    <p>Ім'я отримувача: ЯНГОЛИ IРПЕНЯ ГО
                        Код отримувача: 44828370
                        Рахунок у форматі IBAN: UA843052990000026006016231729
                        Назва банку: АТ КБ "ПРИВАТБАНК"</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary donate-button" onClick={toggle}>OK</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalPay;