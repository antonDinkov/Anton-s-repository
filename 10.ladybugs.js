function ladybugs(arr){

    let fieldSize = arr[0];
    let field = [];
    field.length = fieldSize;
    
    
    let bugsPosition = arr[1].split(' ').map(Number);
    
    
    for(let i = 0;i < fieldSize;i++){
        if(bugsPosition.includes(i)){
            field[i] = 1;
        }else{
            field[i] = 0;
        }
    }

    let commands = arr.slice(2);
    let newCommands = commands.join(' ').split(' ');
    
    
    for(let i = 0; i < newCommands.length; i += 3){
        let currPosition = Number(newCommands[i]);
        if(!field[currPosition]){
            continue;
        }
        field[currPosition] = 0;
        let dirrection = newCommands[i+1];
        let steps = Number(newCommands[i+2]);
        let newPosition
        switch(dirrection){
            case 'right':newPosition = currPosition + steps;
            if(newPosition < field.length){
                while(field[newPosition] == 1){
                    newPosition += steps;
                };
                if(newPosition < field.length){
                    field[newPosition] = 1
                }
            }break;
                case 'left':newPosition = currPosition - steps;
                if(newPosition >= 0){
                    while(field[newPosition] == 1){
                        newPosition -= steps;
                    };
                    if(newPosition >= 0){
                        field[newPosition] = 1
                    }
                }break;
        }
    }
    
    console.log(field.join(' '));
    
}
ladybugs([3,'0 1','0 right 1','2 right 1']);
ladybugs([3,'0 1 2','0 right 1','1 right 1','2 right 1']);
ladybugs([5,'3','3 left 2','1 left -2']);