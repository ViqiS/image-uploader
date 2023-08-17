'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './images.module.css'

function GetImagesBack() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://db-image-dev.fl0.io/api/v1/uploadImage')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log('Error al obtener los datos', error);
      });
  }, []);

  return (
    <div className={styles.containerImages}>
        {data.map((image) => (
          <div key={image.id} >
            <img className={styles.getImages} src={image.image} alt={image.name} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
  )
}

export default GetImagesBack;
