import { Component, ViewChild, Output, HostListener, EventEmitter  } from '@angular/core';
import { NavfunctionService } from './navfunction.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog, MatDialogConfig } from "@angular/material";

import { Router } from '@angular/router';

import { DirectionsComponent } from './directions/directions.component';
import { Directions2Component } from './directions2/directions2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./topLevelCSS/app.component.scss', './topLevelCSS/app.mobile.component.scss', './topLevelCSS/app.animations.scss']
})
export class AppComponent {

	@ViewChild('sidenav') sidenav: MatSidenav;

	open:boolean = false;

	close() { this.sidenav.close(); }

	pcdata1:number;
 	pcdata2:number;
	receiveValue1( $event){ this.pcdata1 = $event.secondCard; }
 	receiveValue( $event){ this.pcdata2 = $event.firstCard; }


	@HostListener('click')
	click() { this.navfunction.open(); }

	navitems:any[];
	constructor(private router:Router, private navfunction: NavfunctionService, private dialog: MatDialog ) {
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


 
homeLink:string = "/sideArchive/march-12";
homeLink2:string = "/sideArchive/march-5";
homeLink3:string = "/sideArchive/feb-25";
homeLink4:string = "/sideArchive/feb-18";

gotoLink(_url:string){
    this.router.navigateByUrl(_url);
  }


 openDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.dialog.open(DirectionsComponent, dialogConfig);
    }

mouseEnterDirections1(div : string){
console.log(div);	
}
mouseEnterDirections2(div : string){
console.log(div);	
}


 openDialog2() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.dialog.open(Directions2Component, dialogConfig);
    }

}
