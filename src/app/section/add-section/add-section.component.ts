import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SectionDataServicve } from 'src/app/shared/services/section-data-servicve';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {
  myForm !: FormGroup;
  constructor( private SectionDataServ : SectionDataServicve) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      sectionHeader : new FormControl(''),
      sectionDetails : new FormControl('')
    })
  }

  submit(){
    let section = this.myForm.value;
    this.SectionDataServ.addSection(section)
    this.myForm.patchValue({
      sectionHeader : '',
      sectionDetails : ''
    })
  }

}
