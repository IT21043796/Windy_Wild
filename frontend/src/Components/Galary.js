import React, {useState} from "react";
import './galary.css';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from '../Images/Galary/1.jpg';
import Img2 from '../Images/Galary/2.jpg';
import Img3 from '../Images/Galary/3.jpg';
import Img4 from '../Images/Galary/4.jpg';
import Img5 from '../Images/Galary/5.jpg';
import Img6 from '../Images/Galary/6.jpg';
import Img7 from '../Images/Galary/7.jpg';
import Img8 from '../Images/Galary/8.jpg';

export default function Galary() {

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
    {
      id: 8,
      imgSrc: Img8,
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
    <div className={model? "model open":"model"}>
        <img src={tempimgSrc}/>
        <CloseIcon onClick={()=> setModel(false)}/>
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
    </>
  )
}
