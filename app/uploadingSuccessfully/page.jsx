import GetImagesBack from '../components/Images';
import styles from './uploadingSuccessfully.module.css';
import { BsCheckCircleFill }from 'react-icons/bs'

function UploadingSuccessfully() {
  return (
  <section className={styles.container}>
      <div className={styles.uploadedImage}>
        <BsCheckCircleFill className={styles.check}/>
        <p className={styles.text}>Upload Successfully!!!</p>
      </div>
      <GetImagesBack/>
    </section>
  );
}

export default UploadingSuccessfully;