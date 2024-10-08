function hardWord(arr){

    let [str, innerArr] = arr;
    const strArr = str.split(/[.,!?:;]? /); // / /Ролята на кавички, а [.,!?:;]? - ?ако ги има знаците в[].
                                            //Сплитни ми по знаците(ако ги има) и по интервал(винаги)!
    const onlyHidden = strArr.filter(el => el.includes('_'));
    for (const toBeReplaced of onlyHidden) { //тук последователността на елементите е същата като в стринга
        const replacement = innerArr.find(el => el.length === toBeReplaced.length);
        str = str.replace(toBeReplaced, replacement);
    }
    console.log(str);
    
    }
    hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])
    