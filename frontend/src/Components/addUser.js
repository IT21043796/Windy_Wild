import React from 'react'
import './AddUser.css'

class AddUser extends React.Component{
    
    render(){
        return(

            <div class="container section">   
                <div class="form-box">
                        <form action = "#">
                            <h2>Sign Up</h2>
                            <div class="inputbox">
                                <ion-icon name="person-outline"></ion-icon>
                                <input type = "text" required/>
                                <label for="">Name</label>
                            </div>
                            <div class="inputbox date">
                                <ion-icon name="calendar-outline"></ion-icon>
                                <input type = "text" required/>
                                <label for="">Date of Birth</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type = "email" required/>
                                <label for="">Email</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type = "password" required/>
                                <label for="">Password</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type = "password" required/>
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
}

export default AddUser;