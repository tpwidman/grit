import {register} from 'platypus';

export default class Format {
    formatTime(seconds: number): string {
        var minutes = Math.floor(seconds / 60);
        var secs = Math.floor(seconds % 60);
        // if (Math.floor(seconds / 60) <= 9) {
        //     var minutes = '0' + Math.floor(seconds / 60);
        // } else {
        //     var minutes = Math.floor(seconds / 60);
        // }

        // if (Math.floor(seconds % 60) <= 9) {
        //     var secs = '0' + Math.floor(seconds % 60);
        // } else {
        //     var secs = Math.floor(seconds % 60);
        // }
        return minutes + ':' + secs;
    }
}

register.injectable('format', Format);
