import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import TasksViewControl from '../tasks/tasks.vc';

export default class ListsViewControl extends BaseViewControl {
    templateString: string = require('./lists.vc.html');

    context: any = {
        taskSelection: '',
        showTaskDetails: false
    };

    expandTaskDetails() {
        this.context.showTaskDetails = !this.context.showTaskDetails;
    }

    navigatedTo(parameters: { id: string; }, query: any): void {
        this.context.taskSelection = parameters.id;
    }
}

register.viewControl('lists-vc', ListsViewControl);
