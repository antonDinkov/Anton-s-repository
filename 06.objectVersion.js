function songs(arr){

    const numberOfSongs = arr.shift();
    const typeListEndProgram = arr.pop();
    const arrToPrint = arr.filter((el)=>{
        let elOfInterest = el.split('_')[0];
        if(elOfInterest === typeListEndProgram){
            return el;
        }
    });
    
    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    if(arrToPrint.length > 0){
        for (const el of arrToPrint) {
            const [type, name, time] = el.split('_');
            const newSong = new Song(type, name, time);
            console.log(newSong.name);
        }
    }else{
        for (const el of arr) {
            const [type, name, time] = el.split('_');
            const newSong = new Song(type, name, time);
            console.log(newSong.name);
        }
    }
    
    }
    songs([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite']);
    songs([4,'favourite_DownTown_3:14','listenLater_Andalouse_3:24','favourite_In To The Night_3:58','favourite_Live It Up_3:48','listenLater']);
    songs([2,'like_Replay_3:15','ban_Photoshop_3:48','all']);