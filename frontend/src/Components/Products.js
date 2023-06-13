import React from 'react';
import './Products.css';
import { useRef,useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {useNavigate, Link, withRouter} from 'react-router-dom';


export default function Products(){
    
   const navigate = useNavigate(); 
    return(
        <div>
            <div class="container outerbox">
                <button onClick={() => navigate('/addP')}>Add</button>
                <form>
               
                </form>
            </div>
        </div>
    )
}