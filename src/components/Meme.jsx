import memesData from '../memesData'
import './Meme.css'
import { useState } from 'react'


function Meme() {

    const [memeImage, setMemeImage] = useState ('')

    function getMemeImage () {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    



    return (
        <main>
            <div className='form'>
                
                <label htmlFor='top-text' className='form--label'>Top Text</label>
                <label htmlFor='bottom-text' className='form--label'>Bottom Text</label>

                <input type='text' className='form--input' placeholder='Shut up' id='top-text'/>
                <input type='text' className='form--input' placeholder='and take my money' id='bottom-text'/>

                <button onClick={getMemeImage} className='form--button'>Get a new meme image 🖼</button>
            </div>

            <img src={memeImage} className='meme--image'/>
        </main>
    )
}

export default Meme