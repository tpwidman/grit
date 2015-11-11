declare module models {
	interface ITask {
		TypeOfTask: string;
		TypeOfTimer: string;
		createdAt?: Date;
		TaskDetails: string;
		objectId?: string;
		prettyDate?: string;
		updatedAt?: Date;
		TotalNumOfPomo: number;
	}
	
	interface IResponse {
		results: Array<ITask>;
	}
}

declare module contexts {
	interface ISavedListContext {
		/*When calling another interface that is in another
		module, you must call "models" and then the name of
		the interface*/
		tasks: Array<models.ITask>;
	}
	
	interface IListsContext {
		taskSelection: string;
		timerSelection: string;
		showTaskDetails: boolean;
		task: models.ITask;
	}
}