import React, { useState, useEffect } from 'react'
import './App.scss'
import leftpicture from './Asset/leftpicture.png'
import rightpicture from './Asset/rightpicture.png'

export default function App(props) {
  let joke = [
    'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
    'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
    'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying,"Because I heard my daddy tell my mommy, I am going to eat that pussy once Jimmy leaves for school today!"',
    `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
    `That's all the jokes for today! Come back another day!`
  ]

  const [jokeindex, Setjokeindex] = useState(0)

  useEffect(()=>{
    if(jokeindex > 3) {
      Setjokeindex(0)
    }
  },[jokeindex])

  const vote = () => {
    if(jokeindex === 0) {
      document.cookie = 'name0=joke0'
    } else if(jokeindex === 1) {
      document.cookie = 'name1=joke1'
    } else if(jokeindex === 2) {
      document.cookie = 'name2=joke2'
    } else if(jokeindex === 3) {
      document.cookie = 'name3=joke3'
    } 
    Setjokeindex(jokeindex+1)
  }
  return (
    <div className='app'>
        <div className='navbar'>
            <div className='navbarcontent'>
                <img src={leftpicture} style={{width:'30px', height:'30px'}}/>
                <img src={rightpicture} style={{width:'80px', height:'32px'}}/>
            </div>
        </div>

        <div className='jokebanner'>
            <h1>A joke a day keeps the doctor away</h1>
            <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
        </div>

        <div className='joke'>
            <div className='jokecontent'>
                {
                  joke.map((n,i)=>{
                    return i === document.cookie.split('; ').filter(n=>n).length ?
                              i < 3 ?
                                <p key={i}>{n}</p>
                              : <p style={{textAlign: 'center'}}>{n}</p>
                            : ``
                  })
                }
                <hr style={{width: '75%'}}/>
            </div>
        </div>

        <div className='buttonzone'>
            <button className='funny' onClick={vote}>This is Funny!</button>
            <button className='notfunny' onClick={vote}>This is not funny.</button>
        </div>

        <div className='footer'>
            <div className='footercontent'>
              <p>This website is created as part of Hlsolutions program. The materials contained on this website are provided for general information only and do not consittute any form of advice. HLS assume no responsibility for the accuracy of any particular statement and accept no liability for any loss or damage which may arise from reliance on the information contained on this site.</p>
              <p>Copyright 2021 HLS</p>
            </div>
        </div>
    </div>
  )
}

