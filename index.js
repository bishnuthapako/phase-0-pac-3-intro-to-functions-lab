
function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}
    

function logWhisper(string){
    console.log(string.toLowerCase())
}



const cantAnswer = "I can\'t hear you!";
const yesIndeed = "YES INDEED!";
const wouldLove = "I would love to!";
function sayHiToHeadphonedRoommate(string){
    if(string.toLowerCase() === string){
        return cantAnswer;
    } else if(string.toUpperCase() === string){ return yesIndeed
    }else if("Let\'s have dinner together!" === string){ return wouldLove}
}



/*
function sayHiToHeadphonedRoommate(string){
    if(string.toUpperCase() === string){
        return yesIndeed;

    } else if (string === "Let's have dinner together!"){
        return wouldLove;

    }


    return cantAnswer;
        } 

  */