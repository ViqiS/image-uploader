'use client'
import React, { useState } from 'react';
import UploadImage from './uploadImage/page';
import UploadingImage from './uploadingImage/page';
import UploadingSuccessfully from './uploadingSuccessfully/page';

export default function App() {
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false); // Estado para controlar la carga exitosa

  const handleUploadStart = () => {
    setUploading(true);
    setUploadSuccess(false); // Reiniciar el estado de carga exitosa
  };

  const handleUploadFinish = () => {
    setUploading(false);
    setUploadSuccess(true); // Marcar la carga como exitosa
  };

  return (
    <>
      {uploading ? (
        <UploadingImage />
      ) : uploadSuccess ? (
        <UploadingSuccessfully/>
      ) : (
        <UploadImage
          onUploadStart={handleUploadStart}
          onUploadFinish={handleUploadFinish}
        />
      )}
    </>
  );
}
