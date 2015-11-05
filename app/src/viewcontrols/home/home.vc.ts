import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import TasksViewControl from '../tasks/tasks.vc';
import ListsViewControl from '../lists/lists.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};

    goToTasks(): void {
      //this needs to navigate to Tasks Page//
        this.navigator.navigate(TasksViewControl);
    }

    goToLists(): void {
      //this needs to navigate to Tasks Page//
        this.navigator.navigate(ListsViewControl);
    }
}

register.viewControl('home-vc', HomeViewControl);
