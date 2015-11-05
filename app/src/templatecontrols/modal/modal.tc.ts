import {register, ui} from 'platypus';

export default class ModalTemplateControl extends ui.TemplateControl {
    templateString: string = require('./modal.tc.html');

    context: any = {
        modal1: false,
        time: 10
    }

    constructor(){
        super();
        this.hasOwnContext = true;
    }

    initialize() {
        setInterval(() => {
            this.context.time--;
        }, 1000);
    }

    toggleModal() : void {
        this.context.modal1 = !this.context.modal1;
    }
}

register.control('modal', ModalTemplateControl);
