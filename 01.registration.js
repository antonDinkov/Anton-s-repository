function registration(arr){

let userName = arr.shift();
let command = arr.shift();
while(command !== 'Registration'){
    const commands = command.split(' ');
    const newCommand = commands.shift();
    switch(newCommand){
        case 'Letters':
            const toDo = commands.shift();
            switch(toDo){
                case 'Lower':
                    userName = userName.toLowerCase();break;
                    case 'Upper':
                        userName = userName.toUpperCase();break;
            }
            console.log(userName);
            break;
            case 'Reverse':
                const startIdx = Number(commands.shift());
                const endIdx = Number(commands.shift());
                if((startIdx >= 0 && startIdx < userName.length) && (endIdx >= 0 && endIdx < userName.length)){
                    let substring = userName.substring(startIdx, endIdx+1).split('').reverse().join('');
                    console.log(substring);
                };
                break;
                case 'Substring':
                    let includes = commands.shift();
                    if (userName.includes(includes)){
                        const includesArr = includes.split('');
                        for (const iterator of includesArr) {
                            const index = userName.indexOf(iterator);
                            userName = userName.split('');
                            userName.splice(index, 1);
                            userName = userName.join('');
                        }
                        console.log(userName);
                    }else{
                        console.log(`The username ${userName} doesn't contain ${includes}.`);
                    };
                    break;
                    case 'Replace':
                        const char = commands.shift();
                        userName = userName.split('');
                        for (let i = 0; i < userName.length; i++){
                            if(userName[i] === char){
                                userName[i] = '-';
                            }
                        }
                        userName = userName.join('');
                        console.log(userName);
                        break;
                        case 'IsValid':
                            const character = commands.shift();
                            if (userName.includes(character)) {
                                console.log('Valid username.');
                            }else{
                                console.log(`${character} must be contained in your username.`);
                            }
    }

    command = arr.shift();
}

}
//registration(['John', 'Letters Lower', 'Substring SA', 'IsValid @', 'Registration'])
registration(['ThisIsSoftUni', 'Reverse 1 3', 'Replace S', 'Substring hi', 'Registration'])