function winningTicket(str){

let tickets = str.split(', ');
let regexAt = /@+/;
let regexHash = /#+/;
let regex$ = /\$+/;
let regexCaret = /\^+/;
for (let ticket of tickets) {
    ticket = ticket.trim();
    let firstHalf = ticket.slice(0, ticket.length/2);
    let secondHalf = ticket.slice(ticket.length/2);
    if (ticket.length !== 20) {
        console.log('invalid ticket');
    }else {
        if (firstHalf.includes('@@@@@@') && secondHalf.includes('@@@@@@')) {
            let match1 = firstHalf.match(regexAt);
            let match2 = secondHalf.match(regexAt);
            let bigger = biggerOne(match1[0].length, match2[0].length);
                if (bigger >= 6 && bigger < 10) {
                    console.log(`ticket "${ticket}" - ${bigger}@`);
                } else if (bigger === 10) {
                    console.log(`ticket "${ticket}" - ${bigger}@ Jackpot!`);
                }
        } else if (firstHalf.includes('######') && secondHalf.includes('######')) {
            let match1 = firstHalf.match(regexHash);
            let match2 = secondHalf.match(regexHash);
            let bigger = biggerOne(match1[0].length, match2[0].length);
                if (bigger >= 6 && bigger < 10) {
                    console.log(`ticket "${ticket}" - ${bigger}#`);
                } else if (bigger === 10) {
                    console.log(`ticket "${ticket}" - ${bigger}# Jackpot!`);
                    
                }
        } else if (firstHalf.includes('$$$$$$') && secondHalf.includes('$$$$$$')) {
            let match1 = firstHalf.match(regex$);
            let match2 = secondHalf.match(regex$);
            let bigger = biggerOne(match1[0].length, match2[0].length);
                if (bigger >= 6 && bigger < 10) {
                    console.log(`ticket "${ticket}" - ${bigger}$`);
                } else if (bigger === 10) {
                    console.log(`ticket "${ticket}" - ${bigger}$ Jackpot!`);
                }
        } else if (firstHalf.includes('^^^^^^') && secondHalf.includes('^^^^^^')) {
            let match1 = firstHalf.match(regexCaret);
            let match2 = secondHalf.match(regexCaret);
            let bigger = biggerOne(match1[0].length, match2[0].length);
                if (bigger >= 6 && bigger < 10) {
                    console.log(`ticket "${ticket}" - ${bigger}^`);
                } else if (bigger === 10) {
                    console.log(`ticket "${ticket}" - ${bigger}^ Jackpot!`);
                    
                }
        } else {
            console.log(`ticket "${ticket}" - no match`);
        }
    }
}
function biggerOne(x, y){
    if (x<y) {
        return x;
    }else {
        return y;
    }
}

}
//winningTicket('Cash$$$$$$Ca$$$$$$sh')
winningTicket('$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey')
//winningTicket('validticketnomatch:(')