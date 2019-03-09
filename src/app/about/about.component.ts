import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { NavfunctionService } from '../navfunction.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	@HostBinding('class.is-open')
  	isOpen = true;

  constructor( private navfunction: NavfunctionService ) { }

  ngOnInit() { this.navfunction.change.subscribe(isOpen => { this.isOpen = isOpen; }); }


}