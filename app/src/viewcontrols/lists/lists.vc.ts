import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import TasksViewControl from '../tasks/tasks.vc';

export default class ListsViewControl extends BaseViewControl {
    templateString: string = require('./lists.vc.html');

    context: any = {
        taskSelection: '',
        timerSelection:'',
        showTaskDetails: false
    };

    expandTaskDetails() {
        this.context.showTaskDetails = !this.context.showTaskDetails;
    };

    navigatedTo(parameters: { id: string; it: string; }, query: any): void {
        this.context.taskSelection = parameters.id;
        this.context.timerSelection = parameters.it;
    };
}

register.viewControl('lists-vc', ListsViewControl);
