import {controls, events, register, ui, web} from 'platypus';
import ModalTemplateControl from '../modal/modal.tc';

export default class FooterTemplateControl extends ui.TemplateControl {
    templateString: string = require('./footer.tc.html');

    context: any = {}
    modal1: controls.INamedElement<HTMLDivElement, ModalTemplateControl>;

    toggleModal(): void {
        this.modal1.control.toggleModal();
    }
}

register.control('footer', FooterTemplateControl);
