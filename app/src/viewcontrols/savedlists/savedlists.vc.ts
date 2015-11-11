import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import TasksViewControl from '../tasks/tasks.vc';
import ListsViewControl from '../lists/lists.vc';
import TaskRepository from '../../repositories/task/task.repo';

export default class SavedlistsViewControl extends BaseViewControl {
    templateString: string = require('./savedlists.vc.html');

    context: contexts.ISavedListContext = {
        tasks: []
        };
        
    constructor(private taskRepo: TaskRepository) {
        super();
    }
    
    navigatedTo() {
        this.taskRepo.getTask().then((parsetasks) => {
            for (var index = 0; index < parsetasks.length; index++) {
                var element = parsetasks[index];
                this.context.tasks.push(element);
            }
        });
    }  
}
   

 /*  constructor (private storage: storage.LocalStorage) {
        super()
        // We want to store the user id in local storage
        this.storage.setItem('', taskSelection);
        
        // To get the userid out of storage
        this.storage.getItem('taskSelection');
    
    }*/
register.viewControl('savedlists-vc', SavedlistsViewControl, [TaskRepository]);

/*So What do we need to store
1) Type of Task
2) Type of Timer
3) Input Info
4) Number of Pomos
5) Amount of Time */

