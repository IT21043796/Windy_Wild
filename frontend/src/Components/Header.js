import React from 'react'
import wwLogo from '../Images/logo.png'

class Header extends React.Component {

    render (){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light fs-5 fw-normal" >
                    <div class="container">
                    <a class="navbar-brand" href="/">
                    <img src={wwLogo} alt="" width="150" height="70" class="logo d-inline-block align-text-top ps-10"/>
                    </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav m-auto mx-auto p-0">
                            <li class="nav-item ps-5">
                            <a class="nav-link" href="/">Home</a>
                            </li>

                            <li class="nav-item ps-5">
                            <a class="nav-link" href="/">About Us</a>
                            </li>

                            <li class="nav-item ps-5">
                            <a class="nav-link" href="#">Galary</a>
                            </li>

                            <li class="nav-item ps-5">
                            <a class="nav-link" href="#">Contct Us</a>
                            </li>

                            <li class="nav-item ps-5">
                            <a class="nav-link" href="#">Produts</a>
                            </li>

                        </ul>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li class="nav-but ps-3">
                                <a class="btn btn-outline-dark" href="/add">Sign Up</a>
                            </li>
                            <li class="nav-but ps-3">
                                <a class="btn btn-outline-dark" href="/log">Log In</a>
                            </li>

                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;