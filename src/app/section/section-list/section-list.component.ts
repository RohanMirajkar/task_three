import { Component, OnInit } from '@angular/core';
import { SectionDataServicve } from 'src/app/shared/services/section-data-servicve';
import { Section } from '../../shared/models/section-model';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  sectionList : Section[] = [
    
  ]
  constructor(private SectionDataServ : SectionDataServicve) { }

  ngOnInit(): void {
    this.SectionDataServ.myObs.subscribe((data) => {
      this.sectionList = data
    })
  }

}
