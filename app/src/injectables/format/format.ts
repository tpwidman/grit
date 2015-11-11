import {register} from 'platypus';

export default class Format {
    formatTime(seconds: number): string {
        return 'bitch' + seconds;
        // convert to string mm:ss
    }
}

register.injectable('format', Format);
