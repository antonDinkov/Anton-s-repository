function assemblyLine(){

    let library = {
        hasClima: function (obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function () {
                if (obj.temp < obj.tempSettings) {
                    obj.temp++;
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp--;
                } else {
                    
                }
            }
        },
        hasAudio: function (obj) {
            obj.currentTrack = {name: null, artist: null},
            obj.nowPlaying = function () {
                if (!currentTrack) {
                    
                } else {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                }
                
            }
        },
        hasParktronic: function (obj) {
            obj.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('');
                    
                }
            }
        }
    }
    
    return library;
    
    }
assemblyLine()
assemblyLine()