import { Component } from '@angular/core';
import { MdAnchor, MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

@Component({
  // moduleId: module.id,
  selector: 'app',
  directives: [
    MdAnchor,
    MdButton,
    MdToolbar,
    MD_SIDENAV_DIRECTIVES,
    MdIcon,
    MD_LIST_DIRECTIVES,
    StoreLogMonitorComponent
  ],
  providers: [ MdIconRegistry ],
  styles: [`
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .secondary {
      color: rgba(0, 0, 0, .54);
    }

    md-sidenav-layout {
      background: rgba(0, 0, 0, .03);
      right: 30% !important; // Make space for the devtools, demo only
    }

    md-sidenav {
      width: 300px;
    }
  `],
  templateUrl : 'app.html' 
  
})
export default class App { }
