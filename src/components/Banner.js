import logo from '../assets/logo.png'
import '../styles/Banner.css'


function Banner() {
    return (
    <div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo'/>
        <h1 className='lmj-title'>La maison jungle</h1>
    </div>

        //si on veut utiliser l'attribut style 
        // NB:il faut privilegier la méthode classNames

    /*<div style={{
        color : 'black',
        textAlign : 'right',
        padding : 32,
        borderBottom : 'solid 3px black',
    }}>
        <h1>La maison jungle</h1>
    </div>*/)
  }
  
  export default Banner
  