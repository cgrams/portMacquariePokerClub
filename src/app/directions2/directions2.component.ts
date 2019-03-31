import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-directions2',
  templateUrl: './directions2.component.html',
  styleUrls: ['./directions2.component.scss']
})
export class Directions2Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Directions2Component>) { }

  ngOnInit() {
  }

	close(){
		this.dialogRef.close();
	}

}
