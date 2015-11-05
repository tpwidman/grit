import {controls, events, register, ui, web} from 'platypus';

export default class FooterTemplateControl extends ui.TemplateControl {
    templateString: string = require('./footer.tc.html');
    
    context: any = {}
    }

register.control('footer', FooterTemplateControl);
