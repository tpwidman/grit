import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ListsViewControl from '../lists/lists.vc';

export default class TasksViewControl extends BaseViewControl {
    templateString: string = require('./tasks.vc.html');

    context: any = {
        showCustomTask: false
    };

     goToLists(): void {
        this.navigator.navigate(ListsViewControl);
    }
}

register.viewControl('tasks-vc', TasksViewControl);
