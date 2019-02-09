import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./header.mobiile.scss']
})
export class HeaderComponent implements OnInit {

	navitems:any[];
  constructor() {
  	this.navitems = [
        {
        	item: "Home",
        	rLink: "/home"
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
