import React from 'react';
import './LogUser.css';
import { useRef,useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

export default function LogUser(){

    const [email,setEmail] = useState('');
    const [password,setPwd] = useState('');

        return(
            
            <div class="container section">   
                <div class="form-box">
                        <form action = "#" >
                            <h2>Log In</h2>
                            <div class="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type = "email" id="email" idrequired onChange={(e)=>{
                                    setEmail(e.target.value);  
                                }}/>
                                <label for="">Email</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type = "password" id="password" required onChange={(e)=>{
                                    setPwd(e.target.value);  
                                }}/>
                                <label for="">Password</label>
                            </div>
                            <div class="forget">
                                <label for=""><input type="checkbox"/>Remember me <p></p> <a href="#">Forget Password</a></label>
                            </div>
                            <button>Log In</button>
                            <div class="register">
                                <p> I don't have an account <a href="/add">Register</a> </p>
                            </div>
                        </form>
                    </div>
                </div>
        )
}