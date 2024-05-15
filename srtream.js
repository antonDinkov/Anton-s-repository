function streamOfLetters(input){

    let counterC = 0;
    let counterO = 0;
    let counterN = 0;
    let counter = 0;
    let i = 0;
    
    let secretSentense = '';
    let secretWord = '';
    
    let command = input[i];
    
    while(command!=='End'){
        if(counter===3){
            secretSentense += `${secretWord} `;
            counter = 0; counterC = 0;counterO = 0;counterN = 0;
            secretWord = '';
        }
        if((command.charCodeAt(0)<65||command.charCodeAt(0)>90)&&(command.charCodeAt(0)<97||command.charCodeAt(0)>122)){
            i++;command=input[i];continue;
        }else{
            switch(command){
                case 'c':if(counterC<1){
                    counterC++;counter++;i++;command = input[i];continue;
                }else{
                    secretWord += command;
                }break;
                    case 'o':if(counterO<1){
                        counterO++;counter++;i++;command = input[i];continue;
                    }else{
                        secretWord += command;
                    }break;
                        case 'n':if(counterN<1){
                            counterN++;counter++;i++;command = input[i];continue;
                        }else{
                            secretWord += command;
                        }break;
                            default:secretWord += command;break;
            }
        }
        i++;
        command=input[i];
    }
    
    console.log(secretSentense);
    
    }
    streamOfLetters(['H','n','e','l','l','o','o','c','t','c','h','o','e','r','e','n','e','End'])