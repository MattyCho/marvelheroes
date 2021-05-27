function getUserName() {
    let userName = prompt('Please enter your name: ');
    console.log(userName);
    document.write('<h3>' + 'Welcome Agent ' + userName + '</h3>');
    return userName;
}

function HailHydra() {
    let userAnswer = prompt('Hail Hydra?');
    console.log(userAnswer);
    
    if (userAnswer.toLowerCase() == 'hail hydra') {
        document.write('<h3>' + 'Hail Hydra' + '</h3>')
        document.write('<img src="https://i.pinimg.com/originals/2a/ce/b9/2aceb93edc1dd3423f1cdcfdf83850c7.png"/>')
    }
    else {
        document.write('<h3>' + 'S.H.I.E.L.D HQ' + '</h3>')
    }
}

function FavoriteChar(){
    let userFavorite = prompt('Who is your favorite marvel character?');
    console.log(userFavorite);
    document.write('<h3>' + 'Your favorite character is ' + userFavorite + '</h3>');
    if (userFavorite.toLowerCase() == 'deadpool') {    
        document.write('<img src="https://pbs.twimg.com/media/D2cuKrOWoAA46Nw.jpg"')
        document.write('<br>' + '<h3>' + 'Good Choice!' + '</h3>')
    } else if (userFavorite.toLowerCase() == 'thor') {
        document.write('<img src="https://media.giphy.com/media/qWoubkSvQxN1C/giphy.gif"')
    } else if (userFavorite.toLowerCase() == 'captain america') {
        document.write('<img src="https://media.giphy.com/media/xT9IgpTy4UVnddmso0/giphy.gif"')
    } else if (userFavorite.toLowerCase() == 'ironman') {
        document.write('<img src="https://media.giphy.com/media/VFB3cJJne7b5m/giphy.gif"')
    } else if (userFavorite.toLowerCase() == 'black widow') {
        document.write('<img src="https://media.giphy.com/media/NtuL7EUjEjuoM/giphy.gif"')
    } else if (userFavorite.toLowerCase() == 'hulk') {
        document.write('<img src="https://media.giphy.com/media/eenzqB2MsGKbK/giphy.gif"')
    } else if (userFavorite.toLowerCase() == 'the hulk') {
        document.write('<img src="https://media.giphy.com/media/eenzqB2MsGKbK/giphy.gif"')
    } else if (userFavorite.toLowerCase() == 'spiderman') {
        document.write('<img src="https://media.giphy.com/media/BWD3CtcudWL28/giphy.gif"')
    } else {
        document.write('<img src="https://media.giphy.com/media/ie76dJeem4xBDcf83e/giphy.gif"')
    }
}

function userGuessingGame() {
    correctAnswer = Math.floor(Math.random() * 1000) + 1;
    console.log(correctAnswer)
    userAttempts = 10;
    for(let i = 0; i < userAttempts; i++){
        let userGuess = prompt('Please Enter a Number 1 - 1000:' + ' (You have ' + (userAttempts - i) + ' attempts left.)');

        while(userGuess < 1 || userGuess > 1000){
            userGuess = prompt('Wrong Range.  Please Enter a Number 1 - 1000');
        }
        if (userGuess == correctAnswer){
            alert('You got it right! Congratulations!');
            break;
        } else if(userGuess < correctAnswer){
            alert('Too Low.  Try Again.')
        }  else if (userGuess > correctAnswer) {
            alert('Too High.  Try Again.')
        } else {
            alert('Something Else Went Wrong.');
        }
        console.log(i);
        if (i == userAttempts - 1){
            alert('You did not win.  Correct answer is: ' + correctAnswer);
        }
    }
}

userGuessingGame();

function PictureCount(){
    let PictureNumber = prompt('How many times do you want Thanos to Snap ?')
    console.log(PictureNumber)
    for (let i = 0; i < PictureNumber; i ++) {
        document.write('<img src="https://media.giphy.com/media/ie76dJeem4xBDcf83e/giphy.gif">')
        document.write('<h3> Snap ' + (i + 1) +  '</h3>')
    }
}