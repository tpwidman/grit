import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class TaskService extends BaseService {

getTask(): async.IThenable<Array<models.ITask>> {
		return this.http.json<models.IResponse>({
			method: 'GET',
			headers: this.reqHeaders,
			url: this.host
		}).then((success) => {
			return <Array<models.ITask>>success.response.results;
		});
	}
	
	submitTask(task: models.ITask): async.IThenable<any> {
		return this.http.json<models.IResponse>({
			method: 'POST',
			headers: this.reqHeaders,
			url:this.host,
			data: task
		}).then((success) => {
			console.log(success);
			return <any>success.response.results;
		});
	}
}


register.injectable('task-svc', TaskService);
