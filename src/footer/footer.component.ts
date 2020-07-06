import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 @Input()previous: any;
 @Input()next: any;
 @Output()getPrevious = new EventEmitter<any>();
 @Output()getNext = new EventEmitter<any>();


  previousLabel: string = 'Previous';
  nextLabel: string = 'Next';
  constructor() { }

  fetchPrevious() {
    this.getPrevious.emit(this.previous);
 }

  fetchNext() {
    this.getNext.emit(this.next);
 }

}
