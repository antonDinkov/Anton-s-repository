function thirdProblem(arr){

let limit = Number(arr.shift());
let users = {};
let userCounter = 0;
let statistics = arr.shift();
while (statistics !== 'Statistics') {
    let [command, token1, token2, token3] = statistics.split('=');
    if (command === 'Add') {
        let username = token1;
        let sent = Number(token2);
        let received = Number(token3);
        if (!users.hasOwnProperty(username)) {
            userCounter++;
            users[username] = {'sent': sent, 'received': received}
        }
    } else if (command === 'Message') {
        let sender = token1;
        let receiver = token2;
        if (users.hasOwnProperty(sender) && users.hasOwnProperty(receiver)) {
            users[sender].sent++;
            if ((users[sender].sent + users[sender].received) === limit) {
                console.log(`${sender} reached the capacity!`);
                delete users[sender];
                userCounter--;
            }
            users[receiver].received++
            if ((users[receiver].received + users[receiver].sent) === limit) {
                console.log(`${receiver} reached the capacity!`);
                delete users[receiver];
                userCounter--;
            }
        }
    } else if (command === 'Empty') {
        let username = token1;
        if (username === 'All') {
            users = {};
            userCounter = 0;
        }
        if (users.hasOwnProperty(username)) {
            delete users[username]
            userCounter--;
        }
    }
    statistics = arr.shift();
}
console.log(`Users count: ${userCounter}`);
let output = Object.entries(users);
for (const [username, {sent, received}] of output) {
    console.log(`${username} - ${sent + received}`);
}

}
thirdProblem(["10", "Add=Berg=9=0", "Add=Kevin=0=0", "Message=Berg=Kevin", "Add=Mark=5=4", "Statistics"])
thirdProblem(["20", "Add=Mark=3=9", "Add=Berry=5=5", "Add=Clark=4=0", "Empty=Berry", "Add=Blake=9=3", "Add=Michael=3=9", "Add=Amy=9=9", "Message=Blake=Amy", "Message=Michael=Amy", "Statistics"])
thirdProblem(["12", "Add=Bonnie=3=5", "Add=Johny=4=4", "Empty=All", "Add=Bonnie=3=3", "Statistics"])