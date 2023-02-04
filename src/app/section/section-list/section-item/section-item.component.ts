import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../../shared/models/section-model';

@Component({
  selector: 'app-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.css']
})
export class SectionItemComponent implements OnInit {
  @Input('sectionFromParent') section !: Section;
  constructor() { }

  ngOnInit(): void {
  }

}
