import React, { useState } from "react";
import styles from './uploadingImage.module.css';

function UploadingImage() {
  const [uploadProgress, setUploadProgress] = useState(0);

  const progressBarClass = `${styles.processBarValue} ${uploadProgress > 0 ? styles.progressActive : ''}`;

  return (
    <section className={styles.sectionUploading}>
      <div className={styles.containerUploading}>
        <h1 className={styles.uploading}>Uploading</h1>
        <div className={styles.processBarSpace}>
          <div className={progressBarClass} style={{ width: `${uploadProgress}%` }}></div>
        </div>
      </div>
    </section>
  )
}

export default UploadingImage;
