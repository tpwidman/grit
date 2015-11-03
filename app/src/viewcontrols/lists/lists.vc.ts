import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ListsViewControl extends BaseViewControl {
    templateString: string = require('./lists.vc.html');

    context: any = {};
}

register.viewControl('lists-vc', ListsViewControl);
