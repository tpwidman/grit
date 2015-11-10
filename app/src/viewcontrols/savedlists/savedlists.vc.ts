import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class SavedlistsViewControl extends BaseViewControl {
    templateString: string = require('./savedlists.vc.html');

    context: any = {};
}

register.viewControl('savedlists-vc', SavedlistsViewControl);
