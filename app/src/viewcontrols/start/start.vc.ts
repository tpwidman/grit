import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class StartViewControl extends BaseViewControl {
    templateString: string = require('./start.vc.html');

    context: any = {};
}

register.viewControl('start-vc', StartViewControl);
