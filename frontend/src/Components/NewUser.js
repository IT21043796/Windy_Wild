import React,{useState} from 'react'
import './AddUser.css'
import axios from "axios";

export default function AddUser(){
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [dob,setDob] = useState("");
    const [password,setPwd]= useState("");
    const [rpwd,setRpwd]= useState("");

    function sendData(e){
        e.preventDefault();
        const newUser={
            name,
            dob,
            email,
            password
        }
        if (!password.localeCompare(rpwd)){
            axios.post("http://localhost:8070/user/add",newUser).then(()=>{
                alert("User Added");
            }).catch((err)=>{
                alert(err)
            })

            

        } else {
            alert("Password mismatch Please enter the same password");
        }
    }
        return(

            <div class="container section">   
                <div class="form-box">
                        <form action = "#" onSubmit={sendData}>
                            <h2>Sign Up</h2>
                            <div class="inputbox">
                                <ion-icon name="person-outline"></ion-icon>
                                <input type = "text" id="name" required onChange={(e)=>{
                                    setName(e.target.value);  
                                }}/>
                                <label for="">Name</label>
                            </div>
                            <div class="inputbox date">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <input type = "text" id="dob" required onChange={(e)=>{
                                    setDob(e.target.value);  
                                }}/>
                                <label for="">Date of Birth</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type = "email" id="email" required onChange={(e)=>{
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
                            <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type = "password" id="rpwd" required onChange={(e)=>{
                                    setRpwd(e.target.value);  
                                }}/>
                                <label for="">ReEnter Password</label>
                            </div>
                            <button>Sign In</button>
                            <div class="register">
                                <p> I already have an account <a href="/log">Log In</a> </p>
                            </div>
                        </form>
                    </div>
                </div> 
        )
    }
