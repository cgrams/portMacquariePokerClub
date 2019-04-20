import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { NavfunctionService } from '../navfunction.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	@HostBinding('class.is-open')
  	isOpen = true;

	constructor( private navfunction: NavfunctionService ) { }

	ngOnInit() { this.navfunction.change.subscribe(isOpen => { this.isOpen = isOpen; }); }

}