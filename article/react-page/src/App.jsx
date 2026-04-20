import './App.css'
import image from './assets/image2.jpg'

function App() {
  const pageStyle = {
    backgroundColor: '#e5e5e5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const articleStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    width: '600px'
  }

  const imageStyle = {
    width: '100%'
  }

  const titleStyle = {
    fontSize: '28px',
    margin: 0,
    color: '#222'
  }

  const textStyle = {
    fontSize: '16px',
    color: '#333',
    textAlign: 'center',
    margin: 0
  }

  return (
    <div style={pageStyle}>
      <article style={articleStyle}>
        <h1 style={titleStyle}>Benzine prijzen worden alleen maar duurder!</h1>
        <img style={imageStyle} src={image} alt="Tank Station Foto" />
        <p style={textStyle}>
          De benzineprijzen blijven stijgen. Dit komt door hogere olieprijzen en belastingen.
          Hierdoor wordt autorijden duurder voor veel mensen.
        </p>
      </article>
    </div>
  )
}

export default App
