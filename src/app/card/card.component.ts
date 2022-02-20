import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() date: string = '';
  @Input() companyName: string = '';
  @Input() jobTitle: string = 'SoftwareDeveloper';
  @Input() companyLogoClass: string = 'card__header-image card__header-image--pgs';
  @Input() link: string = '';
  @Input() projects: {title: string, description: string, details: string}[] = [];

  step = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
