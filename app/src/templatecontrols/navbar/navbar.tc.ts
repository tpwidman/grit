import {register, events, controls, ui, web} from 'platypus';
import {DrawerController} from 'platypusui';
import BaseViewControl from '../../viewcontrols/base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import ListsViewControl from '../../viewcontrols/lists/lists.vc';
import SettingsViewControl from '../../viewcontrols/settings/settings.vc';
import TasksViewControl from '../../viewcontrols/tasks/tasks.vc';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    drawerController: controls.INamedElement<HTMLDivElement, DrawerController>;

    context: any = {
        showNavbar: true,
        home: HomeViewControl,
        lists: ListsViewControl,
        tasks: TasksViewControl,
        settings: SettingsViewControl
    }

    initialize(): void {
        this.on('navigated', (ev: events.DispatchEvent, utils: web.UrlUtils) => {
            this.drawerController.control.close();
            if (utils.pathname.indexOf('/settings') === 0) {
                this.context.currentView = 'Settings'
            } else if (utils.pathname.indexOf('/tasks') === 0) {
                this.context.currentView = 'Tasks'
            } else if (utils.pathname.indexOf('/lists') === 0) {
                this.context.currentView = 'Lists'
            } else {
                this.context.currentView = 'Home'
            }
        });
    }
}

register.control('navbar', NavbarTemplateControl);
