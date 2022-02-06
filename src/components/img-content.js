import React, { useState, useEffect } from 'react'
import './styles.css'
import Modal from './modal-window'
import axios from 'axios'


export default function ImgContent() {

  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [tempimg, setTempimg] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://boiling-refuge-66454.herokuapp.com/images',
      );
      setImages(result.data);
    };
    fetchData();
  }, []);


  const getImg = (img) => {
    let tempImg = [img];
    setTempimg(i => [1, ...tempImg])
    return setModal(true)
  }
   

  return (
    <>       
      <div className="img-grid">
      { images.map((u) => 
        <div key={u.id} onClick={() => getImg(u.url)}>
          <img className='img-grid__content' src={u.url} alt=''></img>
        </div>
      )}
      {
        modal === true ? <Modal img={tempimg[1]} onCloseButtonClick={() => setModal(false)}/> : '' 
      }
      </div>
    </>
  )
}
