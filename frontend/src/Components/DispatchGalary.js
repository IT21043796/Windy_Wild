import React, {useState} from "react";
import './galary.css';

import tile1 from '../Images/Galary/tile1.jpg';
import tile2 from '../Images/Galary/tile2.jpg';
import tile3 from '../Images/Galary/tile3.jpg';

import Img1 from '../Images/Galary/dispatches/1.jpg';
import Img2 from '../Images/Galary/dispatches/2.jfif';
import Img3 from '../Images/Galary/dispatches/3.jpg';
import Img4 from '../Images/Galary/dispatches/4.jpg';
import Img5 from '../Images/Galary/dispatches/5.jpg';
import Img6 from '../Images/Galary/dispatches/6.jpg';
import Img7 from '../Images/Galary/dispatches/7.jpg';


export default function DispatchGalary() {

  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
  ]
  const[model, setModel] = useState(false);
  const[tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc)=>{
    setTempImgSrc(imgSrc);
    setModel(true);  
  }

  return (
    <>
        <div className="container outer">
            <center><div className="album">
                    <a href="/galary"><div className="tile all">
                        <img  className="i" src={tile2}/>
                    </div></a>
                    <a href="/farm"><div className="tile farm">
                        <img  className="i"src={tile1}/>
                    </div></a>
                    <a href="/disp"><div className="tile dispatches">
                        <img className="i"  src={tile3}/> 
                    </div></a>
                    <a href="/custo"><div className="tile customer">
                        <img  className="i" src={tile2}/>
                    </div></a>
            </div></center>
            
            <div className={model? "model open":"model"}>
                <img src={tempimgSrc}/>
                <ion-icon name="close-circle-outline" onClick={()=>{setModel(false)}}/>
                
            </div>
            <div className="galary-container">
                {console.warn(data)}
            <div className="gallery">
                {data.map((item, index) => {
                return (
                    <div className="pics" key={index} onClick={()=>(getImg(item.imgSrc))}>
                    <img src={item.imgSrc} style={{ width: '100%' }} alt={`I ${item.id}`} />
                    </div>
                )
                })}
            </div>
            </div>
        </div>
        
    </>
  )
}
