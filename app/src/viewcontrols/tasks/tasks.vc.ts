import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class TasksViewControl extends BaseViewControl {
    templateString: string = require('./tasks.vc.html');

    context: any = {
        showCustomTask: false
    };
    
    expandCustomTask() {
        if(this.context.showCustomTask === true) {
            this.context.showCustomTask = false;
        } else if(this.context.showCustomTask === false) {
            this.context.showCustomTask = true;
        }
    }
}

register.viewControl('tasks-vc', TasksViewControl);
