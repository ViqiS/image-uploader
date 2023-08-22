import React from 'react';
import styles from './uploadImage.module.css';
import PostImagesBack from '../components/PostImagesBack';

function UploadImage({ onUploadStart, onUploadFinish }) {
  return (
    <section className={styles.container}>
      <div className={styles.carga}>
        <h1 className={styles.title}>Upload your image</h1>
        <p className={styles.text}>File should be Jpeg, jpg or Png...</p>
      </div>
      <PostImagesBack
        onUploadStart={onUploadStart}
        onUploadFinish={onUploadFinish}
      />
    </section>
  );
}

export default UploadImage;
