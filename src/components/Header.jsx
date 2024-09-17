import './Header.css'

function Header() {

    return (
        <header className='header'>
            
            <img src='/troll-face.png' className='header--img'/>

            <h2 className='header--title'>Meme Generator</h2>

            <h4 className='header--p'>React Course - Project 3</h4>
        </header>
    )
}

export default Header