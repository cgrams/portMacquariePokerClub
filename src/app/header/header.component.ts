import { Component, OnInit, Input, HostListener } from '@angular/core';
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
          item: "Services",   
          rLink:"/services"   
        },
        {
          item: "Contact",
          rLink:  "/contact"
        }
     ];
   }

  ngOnInit() {}

}
