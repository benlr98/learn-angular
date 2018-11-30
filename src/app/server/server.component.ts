import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: [ './server.component.scss' ]
})

export class ServerComponent {
    serverId: number = 23;
    serverStatus: string = '';

    constructor() {
        this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getServerStatus() {
        return this.serverStatus;
    }
}