import React from "react"
import { Component } from "react"
import '../components/PartnersComponent.css'
import { Row } from "reactstrap"


const partners = [
    {
        partnerImg: require('../assets/partners/caritas.jpg'),
        partnerUrl: 'https://caritas-kiev.org.ua/',
        key: 0
    },
    {
        partnerImg: require('../assets/partners/red-cross.png'),
        partnerUrl: 'https://redcross.org.ua/',
        key: 1
    },
    {
        partnerImg: require('../assets/partners/unicef_logo.png'),
        partnerUrl: 'https://www.unicef.org/ukraine/',
        key: 2
    },
    {
        partnerImg: require('../assets/partners/Security_Service_of_Ukraine_Emblem.png'),
        partnerUrl: 'https://ssu.gov.ua/',
        key: 3
    },
    {
        partnerImg: require('../assets/partners/Emblem_of_the_Ukrainian_Armed_Forces.png'),
        partnerUrl: 'https://www.zsu.gov.ua/',
        key: 4
    },
    {
        partnerImg: require('../assets/partners/WCK.png'),
        partnerUrl: 'https://wck.org/',
        key: 5
    },
    {
        partnerImg: require('../assets/partners/goodwill.png'),
        partnerUrl: 'https://wasgood.com/',
        key: 6
    },
    {
        partnerImg: require('../assets/partners/LetsHelp.webp'),
        partnerUrl: 'https://letshelp.com.ua/',
        key: 7
    },
    {
        partnerImg: require('../assets/partners/AngelsUA.png'),
        partnerUrl: 'https://shor.by/yangoly-ua',
        key: 8
    },
    {
        partnerImg: require('../assets/partners/Pravo.jpg'),
        partnerUrl: 'https://www.facebook.com/pravozaludei/',
        key: 9
    },
    {
        partnerImg: require('../assets/partners/Silpo.png'),
        partnerUrl: 'https://silpo.ua/',
        key: 10
    },
    {
        partnerImg: require('../assets/partners/MOU.png'),
        partnerUrl: 'https://www.mil.gov.ua/',
        key: 11
    }
]



const List = partners.map(partner => {
    return (
        <a href={partner.partnerUrl} className="partners-link">
            <img src={partner.partnerImg} className='partners-logo' height='90px'></img>
        </a>
    );
})

export default class Partners extends Component {


    render() {
        return (

            <div className="container-fluid pt-5">
                <h3 className="partners-header text-center py-2">Ми співпрацюємо з:</h3>
                <Row className="d-flex flex-wrap px-3 justify-content-center pt-4">
                    {List}
                </Row>
            </div>


        );
    }

}