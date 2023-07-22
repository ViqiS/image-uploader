export default function HomeImage() {
  return (
    <section className="w-96 h-96 bg-orange-500 flex justify-center">
      <div className="w-80 h-80 bg-yellow-200 flex flex-col">
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png...</p>
        <figure className="">
          <img src="" alt="carga imagen" />
        </figure>
        <p>Or</p>
        <button>Choose a file</button>
      </div>
    </section>
  )

}