import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Article1Component} from './articles/article1/article1.component';

import { NavfunctionService } from '../navfunction.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
	@HostBinding('class.is-open')
  	isOpen = true;

  constructor( private navfunction: NavfunctionService ) { }

  ngOnInit() { 

  	this.navfunction.change.subscribe(isOpen => { this.isOpen = isOpen; }); 


 
 

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        console.log('in view');
        document.getElementById('articleHide').style.display = "block";
        document.getElementById('articleHide2').style.display = "block";        
      }
    });
  });

  observer.observe(document.querySelector('#infinite-scroll-trigger'));
 



	}
}
