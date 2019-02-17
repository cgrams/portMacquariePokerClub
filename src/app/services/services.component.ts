import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { NavfunctionService } from '../navfunction.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
	@HostBinding('class.is-open')
  	isOpen = false;

  constructor( private navfunction: NavfunctionService ) { }

  ngOnInit() { this.navfunction.change.subscribe(isOpen => { this.isOpen = isOpen; }); }
}
