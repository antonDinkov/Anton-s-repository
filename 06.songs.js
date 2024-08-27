function songs(arr){

const numberOfSongs = arr.shift();
const typeListEndProgram = arr.pop();
const arrToPrint = arr.filter((el)=>{
    let elOfInterest = el.split('_')[0];
    if(elOfInterest === typeListEndProgram){
        return el;
    }
});

if(arrToPrint.length >0){
    for(el of arrToPrint){
        let output = el.split('_')[1];
        console.log(output);
    }
}else{
    for(el of arr){
        let output = el.split('_')[1];
        console.log(output);
    }
}
class Song {
    constructor(typeList, name, time){
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
}


}
songs([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite']);
songs([4,'favourite_DownTown_3:14','listenLater_Andalouse_3:24','favourite_In To The Night_3:58','favourite_Live It Up_3:48','listenLater']);
songs([2,'like_Replay_3:15','ban_Photoshop_3:48','all']);