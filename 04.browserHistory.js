function browserHistory(obj, arr){

for (const element of arr) {
    let tokens = element.split(/ (.+)/).filter(Boolean);
    let command = tokens[0];
    let toDo = tokens[1];
    if (command === 'Open') {
        obj['Open Tabs'].push(toDo);
        obj['Browser Logs'].push(element);
    } else if (command === 'Close') {
        if (obj['Open Tabs'].includes(toDo)) {
            obj['Recently Closed'].push(toDo);
            let idx = obj['Open Tabs'].indexOf(toDo);
            obj['Open Tabs'].splice(idx, 1);
            obj['Browser Logs'].push(element);
        }
    } else if (command === 'Clear') {
        for (const key in obj) {
            if (key === 'Browser Name') {
                continue;
            }
            obj[key] = [];
        }
    }
}
console.log(obj['Browser Name']);
console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);

}
/* browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"], 

    "Recently Closed":["Yahoo","Gmail"], 

    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]}, 

    ["Close Facebook", "Open StackOverFlow", "Open Google"]) */
browserHistory({"Browser Name":"Mozilla Firefox", 

    "Open Tabs":["YouTube"], 

    "Recently Closed":["Gmail", "Dropbox"], 

    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]}, 

    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"])