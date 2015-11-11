import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import TaskService from '../../services/task/task.svc';

export default class TaskRepository extends BaseRepository {
	
	constructor(private taskService: TaskService) {
        super();
    }
	
	getTask(): async.IThenable<Array<models.ITask>> {
			return this.taskService.getTask().then((tasks) => {
				tasks.forEach((task) => {
					// Dates from a service are not translate back into a JS Date object. They are a string.
					// Before we can work with them, we must convert them into a Date object.
					// We store the original (string) value of task.createdAt in an ANY variable.
					var datestring: any = task.createdAt;
					
					// We then reassign a new Date object created from that string representation of a date.
					task.createdAt = new Date(datestring);
					// Now, task.createdAt is a JavaScript Date object instead of a string.
					task.prettyDate = task.createdAt.toDateString();
				});
				return tasks;
			});
	}
		submitTask(task: models.ITask): async.IThenable<any> {
			return this.taskService.submitTask(task);
		}      
	}
register.injectable('task-repo', TaskRepository, [TaskService]);
