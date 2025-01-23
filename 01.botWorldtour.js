function worldTour(commands) {
    let stops = commands[0];
    let i = 1;

    while (i < commands.length && commands[i] !== "Travel") {
        let command = commands[i];
        if (command.startsWith("Add Stop:")) {
            let [_, index, string] = command.split(":");
            index = parseInt(index);
            if (index >= 0 && index <= stops.length) {
                stops = stops.slice(0, index) + string + stops.slice(index);
            }
        } else if (command.startsWith("Remove Stop:")) {
            let [_, startIndex, endIndex] = command.split(":");
            startIndex = parseInt(startIndex);
            endIndex = parseInt(endIndex);
            if (startIndex >= 0 && startIndex <= endIndex && endIndex < stops.length) {
                stops = stops.slice(0, startIndex) + stops.slice(endIndex + 1);
            }
        } else if (command.startsWith("Switch:")) {
            let [_, oldString, newString] = command.split(":");
            if (stops.includes(oldString)) {
                stops = stops.split(oldString).join(newString);
            }
        }
        
        console.log(stops);
        i++;
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
//worldTour(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"])
worldTour(["Albania:Bulgaria:Cyprus:Deuchland", "Add Stop:3:Nigeria", "Remove Stop:4:8", "Switch:Albania: Azərbaycan", "Travel"])