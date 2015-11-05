import {controls, events, register, ui, web} from 'platypus';
import BaseViewControl from '../../viewcontrols/base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/lists/lists.vc';
import ConnectViewControl from '../../viewcontrols/settings/settings.vc';
import PortfolioViewControl from '../../viewcontrols/tasks/tasks.vc';

export default class FooterTemplateControl extends ui.TemplateControl {
    templateString: string = require('./footer.tc.html');
    footer: controls.INamedElement<HTMLDivElement, FooterTemplateControl>;
    
    context: any = {
        showFooter:true,
        homeView: HomeViewControl,
        
    }
}

register.control('footer', FooterTemplateControl);
