import { BehaviorSubject, Subject } from "rxjs";
import { Section } from "../models/section-model";

export class SectionDataServicve{
    private SectionData : Section[] = [
        { sectionHeader : 'Section 1' , sectionDetails : 'Section 1 - Details '}
    ];

    myObs = new BehaviorSubject<Section[]>(this.SectionData);

    addSection(section : Section){
        this.SectionData.push(section)
        this.myObs.next(this.SectionData.slice(0))
    }
}