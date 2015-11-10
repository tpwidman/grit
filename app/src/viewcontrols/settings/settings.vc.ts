import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class SettingsViewControl extends BaseViewControl {
    templateString: string = require('./settings.vc.html');

    context: any = {
        showCreators:false,
        showVersion:false,
    };
    
    expandCreators(){
       if(this.context.showCreators === true) {
            this.context.showCreators = false;
        } else if(this.context.showCreators === false) {
            this.context.showCreators = true;
        }
    }
    expandVersion(){
        this.context.showAboutCreators = !this.context.showAboutCreators;
    }
    
    collapseCreators() {
        if (this.context.showCreators = true) {
            this.context.showCreators = false;
        }
    }
    collapseVersion() {
        if (this.context.showCreators = true) {
            this.context.showCreators = false;
        }
    }
}

register.viewControl('settings-vc', SettingsViewControl);
