import React, { Component } from 'react';
import "../components/FirstScreen.css";

export default class FirstScreen extends Component {

    render() {
        return (
            <div className='container pt-5' id='about'>
                <div className='row d-xl-flex justify-content-around'>
                    <div className='main-content col-md-12 col-lg-8 col-xl-8 col-sm-12'>
                        <h1>Хто ми?</h1>
                        <p>Наша команда з перших днів війни відгукнулась на
                            заклики про допомогу людей, які постраждали від війни.
                            Ми продовжуємо впевнено крокувати до нашої спільної мети
                            та допомагати усім, хто цього потребує</p>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex justify-content-center'>
                        <img src={require("../assets/Flowers_and_peace.png")} alt="Flowers heart" width={'240px'} className=""></img>
                    </div>
                </div>

            </div>
        );
    }
}