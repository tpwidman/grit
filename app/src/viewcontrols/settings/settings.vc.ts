import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class SettingsViewControl extends BaseViewControl {
    templateString: string = require('./settings.vc.html');

    context: any = {
        showCreators: false
    };

    toggleAbout() : void{
        this.context.showCreators= !this.context.showCreators;

    }
}

register.viewControl('settings-vc', SettingsViewControl);
