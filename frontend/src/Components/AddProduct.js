import React from 'react';
import './AddProduct.css';
import { useState } from 'react';
import axios from 'axios';


    

export default function AddProduct(){

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");

    function sendData(e){
        e.preventDefault();
        const newProduct={
            name,
            price
        }
            axios.post("http://localhost:8070/product/addP",newProduct).then(()=>{
                alert("Product Added");
            }).catch((err)=>{
                alert(err)
            })
    }

    return(
        <div class="full">                
            <div class="container section small">  
                <div class="form-box">
                        <form action = "#" onSubmit={sendData}>
                            <h2>Add Product</h2>
                            <div class="inputbox ">
                                <ion-icon name="pricetags-outline"></ion-icon>
                                <input type = "text" id="name" required onChange={(e)=>{
                                    setName(e.target.value);  
                                }}/>
                                <label for="">Name</label>
                            </div>
                            <div class="inputbox date">
                                <ion-icon name="cash-outline"></ion-icon>
                                <input type = "text" id="price" required onChange={(e)=>{
                                    setPrice(e.target.value);  
                                }}/>
                                <label for="">Price</label>
                            </div>
                            <button>Add Product</button>
                        </form>
                    </div>
                </div> 
            </div>
        
    )
}