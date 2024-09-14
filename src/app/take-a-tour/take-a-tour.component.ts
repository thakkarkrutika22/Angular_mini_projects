import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-a-tour',
  standalone: true,
  imports: [],
  templateUrl: './take-a-tour.component.html',
  styleUrl: './take-a-tour.component.scss'
})
export class TakeATourComponent implements OnInit {
  obj = [
    {
      label: "Header",
      activeClassName:'.header'
    },
    {
      label: "Section",
      activeClassName:'.section'
    },
    {
      label: "Footer",
      activeClassName:'.footer'
    },
  ]
  currentElementIndex = 0
  isCurrentElement = this.obj[this.currentElementIndex]
  isCurrentElementClassName = this.isCurrentElement.activeClassName
  topValue :any = "0px"
  leftValue:any = "0px"

  ngOnInit(): void {
    this.updateTopValue();
  }

  updateTopValue() {
    const currentAccessedElement = document.querySelector(this.isCurrentElement.activeClassName);
    if (currentAccessedElement) {
      const rect = currentAccessedElement.getBoundingClientRect();
      this.topValue = `${rect.top}px`;
      this.leftValue = `${rect.left}px`;
    }
  }

onNext(){
  // Check if the current index is at the end of the array
  if (this.currentElementIndex >= this.obj.length - 1) {
    // Reset to the first element
    this.currentElementIndex = 0;
  } else {
    // Move to the next element
    this.currentElementIndex++;
  }
  this.isCurrentElement = this.obj[this.currentElementIndex];
  this.updateTopValue();
}

onPrevious(){
  if (this.currentElementIndex <= 0) {
    this.currentElementIndex = this.obj.length - 1;
  } else {
    this.currentElementIndex--;
  }
  this.isCurrentElement = this.obj[this.currentElementIndex];
  this.updateTopValue();
}



}
