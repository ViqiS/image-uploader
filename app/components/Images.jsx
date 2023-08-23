'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './images.module.css';
import Image from 'next/image';

function GetImagesBack() {
  const [data, setData] = useState([]);
  const [latestImage, setLatestImage] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(latestImage.image);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Resetear el estado después de 1.5 segundos
  };

  useEffect(() => {
    axios.get('https://db-image-dev.fl0.io/api/v1/uploadImage')
      .then((response) => {
        setData(response.data);
        if (response.data.length > 0) {
          setLatestImage(response.data[response.data.length - 1]);
        }
      })
      .catch((error) => {
        console.log('Error al obtener los datos', error);
      });
  }, []);

  return (
    <div className={styles.containerImages}>
      {latestImage && (
        <div className={styles.image} key={latestImage.id}>
          <Image className={styles.getImages}  width={200} height={100} src={latestImage.image} alt={latestImage.name} />
          <div className={styles.containerUrl}>
            <div className={styles.urlImageContainer}>
              <input
                type='text'
                defaultValue={latestImage.image}
                name='urlImage'
                className={styles.urlImage}
                readOnly
              />
              <button className={styles.copy} onClick={() => handleCopy()}>Copy</button>
            </div>
            <div className={styles.successMessageContainer}>
            <p className={styles.successMessage}>{copied ? 'Copied to clipboard!' : ''}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetImagesBack;
