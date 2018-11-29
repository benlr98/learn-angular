import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { TargetLocator } from 'selenium-webdriver';

@Component({
    selector: 'app-otwo',
    templateUrl: './otwo.comonent.html',
})

export class OtwoComponent {
    username = '';
    userNameEmpty = true;

    constructor() {

    }


}