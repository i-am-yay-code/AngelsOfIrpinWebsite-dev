import React from "react";
import { Component } from "react";



export default class Footer extends Component {

    render() {

        return (
            <div class="container">

                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img src={require('../assets/logo_main.png')} alt='Логотип Янголів' width='25px'></img>
                        </a>
                        <span class="text-muted">© 2022 ГО Янголи Ірпеня</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a class="text-muted" href="https://m.facebook.com/groups/1369478056895045?group_view_referrer=search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a></li>
                        <li class="ms-3"><a class="text-muted" href="tel:+380960502525">Зателефонуйте нам: +38(096) 050 25 25</a></li>
                    </ul>
                </footer>
            </div>
        );
    }
}