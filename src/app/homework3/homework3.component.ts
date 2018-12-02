import { Component } from '@angular/core';

@Component({
    selector: 'app-homework3',
    templateUrl: './homework3.component.html',
    styleUrls: ['./homework3.component.scss']
    
})

export class Homework3Component {

    showParagraph = true;
    buttonClick: number = 0;
    clicks = [];

    toggleParagraph() {
        this.showParagraph === true ? 
            this.showParagraph = false : this.showParagraph = true;
        this.buttonClick += 1;
        this.clicks.push(this.buttonClick);    }

}