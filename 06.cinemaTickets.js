function cinemaTickets(input){

let i = 0;
let movieName = input[i];
i++;
let freeSeats = Number(input[i]);
i++;

let totalTicketNum = 0;
let studentTicketPercent = 0;
let standardTicketPercent = 0;
let kidsTicketPercent = 0;
while(movieName!=='Finish'){
    let command = input[i];
    let seatsCounter = 0;
    while(command!=='End'){
        let ticketType = command;
        switch(ticketType){
            case 'student':studentTicketPercent++;break;
                case 'standard':standardTicketPercent++;break;
                    case 'kid':kidsTicketPercent++;break;
        }
        seatsCounter++;
        totalTicketNum++;
        if(seatsCounter===freeSeats){break;}
        i++;
        command = input[i];
    }
    console.log(`${movieName} - ${((seatsCounter/freeSeats)*100).toFixed(2)}% full.`);
    i++;
    movieName = input[i];
    i++;
    freeSeats = Number(input[i]);
    i++;
}

console.log(`Total tickets: ${totalTicketNum}`);
console.log(`${((studentTicketPercent/totalTicketNum)*100).toFixed(2)}% student tickets.`);
console.log(`${((standardTicketPercent/totalTicketNum)*100).toFixed(2)}% standard tickets.`);
console.log(`${((kidsTicketPercent/totalTicketNum)*100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"])