import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Carga de imagenes</title>
      </head>
      <body>
        {children}
        <span className='created'>
          <p className='VictoriaEscalada' >Created by <a href='https://www.linkedin.com/in/victoria-escalada/'>Victoria Escalada</a> </p>
        </span>
        </body>
    </html>
  )
}
