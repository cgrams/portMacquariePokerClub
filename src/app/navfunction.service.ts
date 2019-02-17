import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({ providedIn: 'root' })

export class NavfunctionService {

	isOpen = true;

	@Output() change: EventEmitter<boolean> = new EventEmitter();

	open(){ this.change.emit(this.isOpen); }

}