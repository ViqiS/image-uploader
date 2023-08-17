'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import styles from './ButtonUpload.module.css';

function PostImagesBack() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleImageChange = (event) => {
    setUploadSuccess(true);
    setSelectedImage(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setImageName(event.target.value);
  };

  const handleUpload = () => {
    if (!selectedImage || !imageName) {
      return;
    }

    const formData = new FormData();
    formData.append('name', imageName);
    formData.append('image', selectedImage);

    axios.post('https://db-image-dev.fl0.io/api/v1/uploadImage', formData)
      .then((response) => {
        console.log('Imagen cargada con éxito:', response.data);
         // Actualiza el estado para mostrar el mensaje de éxito
      })
      .catch((error) => {
        console.error('Error al cargar la imagen:', error);
      });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedImage = event.dataTransfer.files[0];
    setSelectedImage(droppedImage);
    setUploadSuccess(true);
  };

  return (
    <section className={styles.containerUpdateImage}>
      <figure 
        className={styles.figure} 
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}>
          <div className={`${styles.rectangle} ${uploadSuccess ? styles.green : ''}`}>
            <img className={styles.image} src="/image.svg" alt="carga imagen" />
            {uploadSuccess ? (
              <p className={styles.writeName}>Image uploaded, fill in the name field</p>
            ) : (
              <p className={styles.subtext2}>Drag and drop your image here</p>
            )}
            
          </div>
          <p className={styles.subtext}>Or</p>
      </figure>
      <label className={styles.containerInput}>
      <div className={styles.fileSelect}>
      <input className={styles.inputSelect} type="file" onChange={handleImageChange} />
      </div>
      <div>
        <input
          className={styles.inputName}
          type="text"
          placeholder="Image name"
          value={imageName}
          onChange={handleNameChange}
        />
      </div>
      <div className={styles.updateImage}>
          <BsArrowUpCircleFill className={styles.buttonUpdate} onClick={handleUpload} />
      </div>
      </label>
    </section>
  );
}

export default PostImagesBack;
