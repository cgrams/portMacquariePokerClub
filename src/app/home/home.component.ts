import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { NavfunctionService } from '../navfunction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	@HostBinding('class.is-open')
  	isOpen = true;

  constructor( private navfunction: NavfunctionService ) { }

  ngOnInit() { this.navfunction.change.subscribe(isOpen => { this.isOpen = isOpen; }); }

}
