import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DirectionsComponent> ) { }

  ngOnInit() {}

close(){
	this.dialogRef.close();
}

}



