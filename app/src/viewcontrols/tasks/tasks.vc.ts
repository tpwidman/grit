import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ListsViewControl from '../lists/lists.vc';

export default class TasksViewControl extends BaseViewControl {
    templateString: string = require('./tasks.vc.html');

    context: any = {
        showCustomTask: false,
        taskSelection: '1'
    };

     goToLists(): void {
        this.navigator.navigate(ListsViewControl, {
            parameters: {
                id: this.context.taskSelection,
                it: this.context.timerSelection
            }
        });
    }
}

register.viewControl('tasks-vc', TasksViewControl);
