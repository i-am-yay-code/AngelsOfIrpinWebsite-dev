import React from "react"
import { Component } from "react"
import '../components/StatisticsComponent.css'

export default class Statistics extends Component {

    render() {
        return (
            <div className="container-fluid">
                <h2 className="statistics-header text-center pt-4">Наші дії у цифрах</h2>
                <div className='row statistics text-center justify-content-center pt-3'>
                    <div className='statistics-item col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 p-3'>
                        <div className="statistics-number">> 200 <span className="measure">тон</span></div>
                        <div className="statistics-description">їжі для тих, хто потребує</div>
                    </div>
                    <div className='statistics-item item col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 p-3 '>
                        <div className="statistics-number">> 10 <span className="measure">авто</span></div>
                        <div className="statistics-description">для військових</div>
                    </div>
                    <div className='statistics-item item col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 p-3 '>
                        <div className="statistics-number">> 4 <span className="measure">тон</span></div>
                        <div className="statistics-description">іграшок для дітей</div>
                    </div>
                    <div className='statistics-item item col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 p-3 '>
                        <div className="statistics-number">> 10 <span className="measure">тон</span></div>
                        <div className="statistics-description">дитячого харчування</div>
                    </div>
                </div>
            </div>

        )
    }
}
