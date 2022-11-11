import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TooltipPosition} from "@angular/material/tooltip";
import {EventEmiterService} from "../../services/utility/event.emmiter.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  menuTooltipPosition: TooltipPosition = 'right';

  constructor(private _eventEmiter: EventEmiterService) { }

  ngOnInit(): void {
  }
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  open(sideLabel: string) {
    this._eventEmiter.emit(sideLabel);
  }
}
