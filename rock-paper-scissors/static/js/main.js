function rpsGame(yourChoice) {
   

    var humanChoice, botChoice;

    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());

    var result = decideWinner(humanChoice, botChoice);
   
    var message = finalMessage(result);


    rpsFront(humanChoice, botChoice, message)
    

}


function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice (number){
    return ['rock', 'paper', 'scissors'][number];
}


function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'paper': 0, 'rock': 0.5, 'scissors': 1},
        'paper': {'scissors': 0, 'paper': 0.5, 'rock': 1},
        'scissors': {'rock': 0, 'scissors': 0.5, 'paper': 1},

    };

    var yourResult = rpsDatabase[yourChoice][computerChoice];
    var computerResult = rpsDatabase[computerChoice][yourChoice];

    // console.log(yourChoice);

    return [yourResult, computerResult]
}


function finalMessage(yourScore){
    if (yourScore[0] == 0){
        return {'message': 'You Lost!', 'color': 'red'}

    }else if(yourScore[0] == 0.5){
        return {'message': 'You Tied!', 'color': 'yellow'}

    }else{
        return {'message': 'You won!', 'color': 'green'}

    }

}



function rpsFront(humanImgChoice, botImgChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
        
    }

    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()


    var humanDiv = document.createElement('div')
    var messageDiv = document.createElement('div')
    var botDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImgChoice] + "' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size= 60px; padding=30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImgChoice] + "' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-rps').appendChild(humanDiv);
    document.getElementById('flex-rps').appendChild(messageDiv);
    document.getElementById('flex-rps').appendChild(botDiv);




}