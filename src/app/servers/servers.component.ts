import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'There has been no server created!';
  serverName = '';

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    } ,2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server has been created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
