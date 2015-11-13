declare module models {
	interface ITask {
		TypeOfTask: string;
		//TypeOfTimer: string;
		createdAt?: Date;
		TaskDetails: string;
		TaskDetailsTwo: string;
		TaskDetailsThree: string;
		TaskDetailsFour: string;
        pomo1: number;
        pomo2: number;
        pomo3: number;
        pomo4: number;
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
		showSavedListDetails: boolean;
	}

	interface IListsContext {
		taskSelection: string;
		//timerSelection: string;
		showTaskDetails: boolean;
		task: models.ITask;
	}
}