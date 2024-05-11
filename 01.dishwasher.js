function dishwasher(input) {
    let bottles = Number(input[0]);
    let detergentLimit = bottles * 750;   // in ml
    let detergente = 0;

    let platesCounter = 0;
    let potsCounter = 0;
    let command = 'End';
    let stop = false;
    let i = 1;

    while (i < input.length) {
        let currentItem = input[i];

        if (currentItem === command) {
            stop = true;
        } else {
            currentItem = Number(currentItem);
            if (i % 3 === 0) {
                potsCounter += currentItem;
                detergente += currentItem * 15;
            } else {
                platesCounter += currentItem;
                detergente += currentItem * 5;
            }
        }

        i++;
    }

    if (stop) {
        console.log('Detergent was enough!')
        console.log(`${platesCounter} dishes and ${potsCounter} pots were washed.`)
        console.log(`Leftover detergent ${detergentLimit - detergente} ml.`)
    } else {
        console.log(`Not enough detergent, ${detergente - detergentLimit} ml. more necessary!`)
    }
}
//dishwasher(['1','10','15','10','12','13','30','10','10','10'])
dishwasher(['2','53','65','55','End'])