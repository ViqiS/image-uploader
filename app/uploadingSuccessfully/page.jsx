'use client'
import React from 'react';
import GetImagesBack from '../components/Images';
import styles from './uploadingSuccessfully.module.css';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoReturnDownBackOutline } from 'react-icons/io5';

function UploadingSuccessfully() {
  const handleReturnClick = () => {
    window.location.reload(); // Recarga la página
  };

  return (
    <section className={styles.container}>
      <div className={styles.containerReturn}>
        <IoReturnDownBackOutline
          className={styles.return}
          onClick={() => handleReturnClick()}
        />
        <BsCheckCircleFill className={styles.check} />
      </div>
      <div className={styles.uploadedImage}>
        <p className={styles.text}>Upload Successfully!!!</p>
      </div>
      <div className={styles.containerImage}>
      <GetImagesBack />
      </div>
    </section>
  );
}

export default UploadingSuccessfully;
