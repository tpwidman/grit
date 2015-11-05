import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import StartViewControl from '../viewcontrols/start/start.vc';
import TasksViewControl from '../viewcontrols/tasks/tasks.vc';
import ListsViewControl from '../viewcontrols/lists/lists.vc';
import SettingsViewControl from '../viewcontrols/settings/settings.vc';

export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

        router.configure([
            { pattern: '', view: StartViewControl },
            { pattern: '/home', view: HomeViewControl },
            { pattern: '/tasks', view: TasksViewControl },
            { pattern: '/lists', view: ListsViewControl },
            { pattern: '/settings', view: SettingsViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
    
}

register.app('app', MyApp, [
    routing.Router
]);
