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
          <IoReturnDownBackOutline className={styles.return} onClick={handleReturnClick}/>
      </div>
      <div className={styles.uploadedImage}>
        <BsCheckCircleFill className={styles.check} />
        <p className={styles.text}>Upload Successfully!!!</p>
      </div>
      <GetImagesBack />
    </section>
  );
}

export default UploadingSuccessfully;
