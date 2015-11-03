import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class TasksViewControl extends BaseViewControl {
    templateString: string = require('./tasks.vc.html');

    context: any = {};
}

register.viewControl('tasks-vc', TasksViewControl);
