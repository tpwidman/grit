import {register} from 'platypus';

export default class Format {
    formatTime(seconds: number): string {
        var minutes = Math.floor(seconds/60);
        var seconds = Math.floor(seconds % 60);
        return minutes + ':' + seconds;
    }
}

register.injectable('format', Format);
