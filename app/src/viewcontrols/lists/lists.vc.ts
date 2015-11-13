import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import TasksViewControl from '../tasks/tasks.vc';
import SavedListsViewControl from '../savedlists/savedlists.vc';
import TaskRepository from '../../repositories/task/task.repo';

export default class ListsViewControl extends BaseViewControl {
    templateString: string = require('./lists.vc.html');

    context: contexts.IListsContext = {
        taskSelection: '',
        //timerSelection:'',
        showTaskDetails: false,
        task: {
            TypeOfTask: '',
            //TypeOfTimer: '',
            TaskDetails: '',
            TaskDetailsTwo: '',
            TaskDetailsThree: '',
            TaskDetailsFour: '',
            TotalNumOfPomo: 0
        }
    };


    expandTaskDetails() {
        this.context.showTaskDetails = !this.context.showTaskDetails;
    };


    navigatedTo(parameters: { id: string; /* it: string;*/ }, query: any): void {
        this.context.taskSelection = this.context.task.TypeOfTask = parameters.id;
        //this.context.timerSelection = this.context.task.TypeOfTimer = parameters.it;
    };

    constructor(private taskRepo: TaskRepository) {
        super();
    }

    craftMyTask(): void {
        var sendToParse: models.ITask = {
            TypeOfTask: this.context.task.TypeOfTask,
            //TypeOfTimer: this.context.task.TypeOfTimer,
            TaskDetails: this.context.task.TaskDetails,
            TaskDetailsTwo: this.context.task.TaskDetailsTwo,
            TaskDetailsThree: this.context.task.TaskDetailsThree,
            TaskDetailsFour: this.context.task.TaskDetailsFour,
            TotalNumOfPomo: this.context.task.TotalNumOfPomo
        }
        this.taskRepo.submitTask(sendToParse)
        .then((success) => {
            this.navigator.navigate(SavedListsViewControl);
        });
    }
}

register.viewControl('lists-vc', ListsViewControl, [TaskRepository]);
