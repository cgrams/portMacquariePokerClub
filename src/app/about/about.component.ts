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

goals: any[] = [
    {
    	"goalShort": "Home Games",
    	"goalLong": "This club is looking to start home games",
   		"goalHidden": true,
    },
    {
    	"goalShort": "Local Enthusism",
    	"goalLong": "Meet new people and enjoy our nights",
    	"goalHidden": true
    },
    {
    	"goalShort": "Indivisual Skills",
		"goalLong": "It's fun getting better and becoming an expert",
    	"goalHidden": true,      
    }
  ];


	toggleGoals(goal) { goal.goalHidden = !goal.goalHidden; }

}