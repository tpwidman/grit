import {register, storage} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ListsViewControl from '../lists/lists.vc';

export default class SavedlistsViewControl extends BaseViewControl {
    templateString: string = require('./savedlists.vc.html');

    context: any = {};

    constructor (private storage: storage.LocalStorage) {
        
        super();
        // We want to store the user id in local storage
        var uid: number = 0;
        this.storage.setItem('userid', uid);
        
        // To get the userid out of storage
        this.storage.getItem('userid');
    
    }
}
register.viewControl('savedlists-vc', SavedlistsViewControl, [storage.LocalStorage]);

/*So What do we need to store
1) Type of Task
2) Type of Timer
3) Input Info
4) Number of Pomos
5) Amount of Time */

