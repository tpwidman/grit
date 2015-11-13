import {register, ui} from 'platypus';

export default class ModalTemplateControl extends ui.TemplateControl {
    templateString: string = require('./modal.tc.html');

    context: any = {
        modal1: false,
        time: 25*60,
        breakTime: 5*60
    }

    private countdown: NodeJS.Timer;
    private initialTime: number = 25*60;

    toggleModal() : void {
        this.context.modal1 = !this.context.modal1;
    }

    constructor() {
        super();
        this.hasOwnContext = true;
    }

    startTimer() {
        this.stopTimer();
        this.countdown = setInterval(() => {
            if(this.context.time > 0) {
                this.context.time--;
            }
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.countdown);
    }

    resetTimer() {
        this.stopTimer();
        this.context.time = this.initialTime;
    }

    private breakdown: NodeJS.Timer;
    private initialBreak: number = 5*60;

    startBreak() {
        this.stopTimer();
        this.breakdown = setInterval(() => {
            if(this.context.breakTime > 0) {
                this.context.breakTime--;
            }
        }, 1000);
    }

    stopBreak() {
        clearInterval(this.breakdown);
    }

    resetBreak() {
        this.stopTimer();
        this.context.breakTime = this.initialBreak;
    }
}

register.control('modal', ModalTemplateControl);
