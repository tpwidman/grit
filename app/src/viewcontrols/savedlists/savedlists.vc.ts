import {register, storage} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ListsViewControl from '../lists/lists.vc';

export default class SavedlistsViewControl extends BaseViewControl {
    templateString: string = require('./savedlists.vc.html');

    context: any = {};

    constructor (private storage: storage.LocalStorage) {
        super()
    }
}

register.viewControl('savedlists-vc', SavedlistsViewControl);
