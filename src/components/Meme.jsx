import './Meme.css'
import { useState, useEffect } from 'react'


function Meme() {

    // const [memeImage, setMemeImage] = useState ('')
    const [meme, setMeme] = useState ({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/24y43o.jpg'
    })

    const [allMemes, setAllMemes] = useState ([])

    useEffect (() => {
        fetch ('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage () {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    

    function handleChange (event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }



    return (
        <main>
            <div className='form'>
                
                <label htmlFor='top-text' className='form--label'>Top Text</label>
                <label htmlFor='bottom-text' className='form--label'>Bottom Text</label>

                <input 
                    type='text' 
                    className='form--input' 
                    placeholder='Shut up' 
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input 
                    type='text' 
                    className='form--input' 
                    placeholder='and take my money'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button onClick={getMemeImage} className='form--button'>Get a new meme image 🖼</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className='meme--image'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme