let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    deckId = data.deck_id
  })
  .catch(err => {
      console.log(`error ${err}`)
  });


document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('#player1').src = data.cards[0].image
    document.querySelector('#player2').src = data.cards[1].image

    let player1Val = convertToNum(data.cards[0].value)
    let player2Val = convertToNum(data.cards[1].value)


    if(player1Val > player2Val){
      document.querySelector('#result').innerText = 'Player 1 wins'
    }else if(player1Val < player2Val){
      document.querySelector('#result').innerText = 'Player 2 wins'
    }else{
      document.querySelector('#result').innerText = 'Time for war!'
    }

  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}

function convertToNum(val){
  if(val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  }else{
    return val
  }
}



// document.querySelector('.this').addEventListener('click', getFetch)
// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)

// fetch(`https://api.nasa.gov/planetary/apod?api_key=eoILEWXdS1q9v63gjvJo8DXrtFrtlPKsg3S1p7pV&date=${choice}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//       if(data.media_type === 'image'){
//         document.querySelector('.nasaImage').src = data.hdurl
//       }else if(data.media_type === 'video'){
//         document.querySelector('iframe').src = data.url
//       }
//       // document.querySelector('#datePicker').date = data.date

//       document.querySelector('.explanation').innerText = data.explanation


//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });

//   }




