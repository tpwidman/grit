import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import TasksViewControl from '../viewcontrols/tasks/tasks.vc';
import ListsViewControl from '../viewcontrols/lists/lists.vc';
import SettingsViewControl from '../viewcontrols/settings/settings.vc';
import SavedlistsViewControl from '../viewcontrols/savedlists/savedlists.vc';

export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: '/home', view: HomeViewControl },
            { pattern: '/tasks', view: TasksViewControl },
            { pattern: 'lists/:id', view: ListsViewControl },
            { pattern: '/settings', view: SettingsViewControl },
            { pattern: '/savedlists', view: SavedlistsViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router
]);
