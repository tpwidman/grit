import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ListsViewControl extends BaseViewControl {
    templateString: string = require('./lists.vc.html');

    context: any = {};
    
    expandTaskDetails() {
    if(this.context.showTaskDetails === true) {
            this.context.showTaskDetails = false;
        } else if(this.context.showTaskDetails === false) {
            this.context.showTaskDetails = true;
        }
    }
}

register.viewControl('lists-vc', ListsViewControl);
