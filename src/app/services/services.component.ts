import { Component, OnInit, HostBinding, Input } from '@angular/core';

import {Article1Component} from './articles/article1/article1.component';
import {Article2Component} from './articles/article2/article2.component';
import {Article3Component} from './articles/article3/article3.component';
import {Article4Component} from './articles/article4/article4.component';

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

        setTimeout(function(){ 
        document.getElementById('articleHideNew').style.display = "block";
        document.getElementById('articleHideNew2').style.display = "block";
        document.getElementById('articleHideNew3').style.display = "block";


         }, 300);
        
      }
    });
  });

  observer.observe(document.querySelector('#infinite-scroll-trigger'));
 



	}
}
