'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import styles from './PostImagesBack.module.css';
import UploadingImage from '../uploadingImage/page';

function PostImagesBack({ onUploadStart, onUploadFinish }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('')

  const handleImageChange = (event) => {
    setUploadSuccess(true);
    setSelectedImage(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setImageName(event.target.value);
  };

  const handleUpload = () => {
    if (!selectedImage || !imageName) {
      setErrorMessage("Debes cargar una imagen y un nombre");
      setTimeout(() => setErrorMessage(false), 1500)
      return;
    }
    setErrorMessage(null)
    onUploadStart();

    const formData = new FormData();
    formData.append('name', imageName);
    formData.append('image', selectedImage);

    axios.post('https://db-image-dev.fl0.io/api/v1/uploadImage', formData, {
      onUploadProgress: (progressEvent) => {
        const progressPercentage = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        setUploadProgress(progressPercentage);
      }
    })
      .then((response) => {
        console.log('Imagen cargada con éxito:', response.data);
        setUploadProgress(0); // Reinicia el progreso después de cargar
        setUploadSuccess(true); // Cambia uploadSuccess a false después de cargar con éxito
        onUploadFinish(); // Finaliza el proceso de carga
      })
      .catch((error) => {
        console.error('Error al cargar la imagen:', error);
        setUploadProgress(0); // Reinicia el progreso en caso de error también
        setUploadSuccess(false); // Cambia uploadSuccess a false después de error
        onUploadFinish(); // Finaliza el proceso de carga en caso de error
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
      {uploadProgress > 0 ? (
        <UploadingImage />
      ) : (
        // Renderiza el resto del contenido cuando no hay carga en progreso
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
      )}
      <div className={styles.containerInput}>
        <div className={styles.fileSelect}>
          <input className={styles.inputSelect} type="file" onChange={handleImageChange} />
        </div>
        <div className={styles.sendImage}>
          <input
            className={styles.inputName}
            type="text"
            placeholder="Image name"
            value={imageName}
            onChange={handleNameChange}
          />
          <div className={styles.updateImage}>
          <BsArrowUpCircleFill className={styles.buttonUpdate} onClick={handleUpload}/>
        </div>
        </div>
      </div>
      <div className={styles.errorContainer}>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
    </section>
  );
}

export default PostImagesBack;