import styles from './uploadImage.module.css'

export default function uploadImage() {
  return (
    <section className={styles.container}>
      <div className={styles.carga} >
        <h1 className={styles.title}>Upload your image</h1>
        <p className={styles.text}>File should be Jpeg, Png...</p>
        <figure className={styles.figure} >
          <div className={styles.rectangle}>
          <img className={styles.image} src="/image.svg" alt="carga imagen" />
          <p className={styles.subtext2}>Drag and drop your image here</p>
          </div>
          <p className={styles.subtext}>Or</p>
          
        </figure>
        
        <button className={styles.button}>Choose a file</button>
      </div>
    </section>
  )

}