import {register, ui} from 'platypus';

export default class ModalTemplateControl extends ui.TemplateControl {
    templateString: string = require('./modal.tc.html');

    context: any = {
        modal1: false,
        time: 25*60
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

    // getTimeRemaining(endtime: string){
    //     var deadline = (Date.;
    //     var t = Date.parse(endtime) - Date.parse(new Date());
    //     var seconds = Math.floor( (t/1000) % 60 );
    //     var minutes = Math.floor( (t/1000/60) % 60 );
    //     var hours = Math.floor( (t/(1000*60*60)) % 24 );
    //     var days = Math.floor( t/(1000*60*60*24) );
    //     return {
    //         'total': t,
    //         'days': days,
    //         'hours': hours,
    //         'minutes': minutes,
    //         'seconds': seconds
    //     };
    // }

    // initializeClock(id: string, endtime: string){
    //     var clock = document.getElementById(id);
    //     var timeinterval = setInterval(function() {
    //         var t = function getTimeRemaining(endtime: string);
    //         clock.innerHTML = 'days: ' + t.days + '<br>' +
    //                         'hours: '+ t.hours + '<br>' +
    //                         'minutes: ' + t.minutes + '<br>' +
    //                         'seconds: ' + t.seconds;
    //         if(t.total<=0){
    //         clearInterval(timeinterval);
    //         }
    //     }, 1000);
    // }
}

register.control('modal', ModalTemplateControl);
