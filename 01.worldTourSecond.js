function worldTour(arr){

    let stops = arr.shift();
    let travel = arr.shift();
    while (travel !== 'Travel') {
        let [command, token1, token2] = travel.split(':');
        if (command === 'Add Stop') {
            let idx = Number(token1);
            if (idx >= 0 && idx < stops.length) {
                let firstpart = stops.slice(0, idx);
                let secondPart = stops.slice(idx);
                stops = firstpart + token2 + secondPart;
            }
            console.log(stops);
        } else if (command === 'Remove Stop') {
            let startIdx = Number(token1);
            let endIdx = Number(token2);
            if (startIdx >= 0 && startIdx <= endIdx && endIdx < stops.length) {
                let firstpart = stops.slice(0, startIdx);
                let secondPart = stops.slice(endIdx + 1);
                stops = firstpart + secondPart;
            }
            console.log(stops);
        } else if (command === 'Switch') {
            let regex = new RegExp(token1, 'g');
            stops = stops.replace(regex, token2);
            console.log(stops);
        }
        travel = arr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
    
    }
    //worldTour(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"])
    worldTour(["Albania:Bulgaria:Cyprus:Deuchland", "Add Stop:3:Nigeria", "Remove Stop:4:8", "Switch:Albania: Azərbaycan", "Travel"])