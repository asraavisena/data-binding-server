import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // ! EVENTEMITTER IS AN OBJECT TO EMIT OWN EVENT
  // ! @Output -> listenable from outside
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('alisasesCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string} > ();
  newServerName = '';
  newServerContent = '';

 

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }

  onAddBlueprint() {
   this.blueprintCreated.emit({blueprintName: this.newServerName, blueprintContent: this.newServerContent})
  }

}
