import PostImagesBack from './../components/ButtonUpload'
import styles from './uploadImage.module.css'

function UploadImage() {

  return (
    <section className={styles.container}>
      <div className={styles.carga} >
        <h1 className={styles.title}>Upload your image</h1>
        <p className={styles.text}>File should be Jpeg, jpg or Png...</p>
      </div>
      <PostImagesBack/>
    </section>
    
  )
}

export default UploadImage;