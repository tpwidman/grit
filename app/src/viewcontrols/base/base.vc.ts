import {register, ui} from 'platypus';
import {acquire, async, Document} from 'platypus';

export default class BaseViewControl extends ui.ViewControl {
    protected document: Document = acquire(Document);
    protected Promise: async.IPromise = acquire(async.IPromise);
    protected scrollingContainer: HTMLElement = <HTMLElement>this.document.body;

    context: any = {
        modals: {
            modal1: false,
            modal2: false
        }
    }

    toggleModal(parameter: string) : void {
        this.context.modals[parameter] = !this.context.modals[parameter];
    }

    setTemplate() {
        this.scrollToTop();
    }

    protected scrollToTop() {
        let scrollingContainer = this.scrollingContainer;
        if (this.utils.isNode(scrollingContainer)) {
            scrollingContainer.scrollTop = 0;
        }
    }
}