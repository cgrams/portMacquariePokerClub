import { Component, OnInit, Output, HostListener, EventEmitter } from '@angular/core';
import { NavfunctionService } from '../navfunction.service';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./header.mobiile.scss']
})
export class HeaderComponent implements OnInit {

  @HostListener('click')
  click() { this.navfunction.open(); }

  navitems:any[];
  constructor( private navfunction: NavfunctionService ) {
    this.navitems = [
        {
        	item: "Home",
        	rLink: ""
        },
        {
	        item: "About",
          rLink: "/about"     
        },
        {
          item: "Archive",   
          rLink:"/blog"   
        },
        {
          item: "Homegames",   
          rLink:"/join"   
        },        
        {
          item: "Contact",
          rLink:  "/contact"
        }
     ];
   }

  ngOnInit(){}



  @Output() msgEvent = new EventEmitter<object>();

  emitChild(){
    let random1 = Math.ceil(Math.random() * 13);
    let random2 = Math.ceil(Math.random() * 13);
    this.msgEvent.emit({ firstCard: random1, secondCard: random2 });
    }
 



}