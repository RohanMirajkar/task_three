import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AddSectionComponent } from './section/add-section/add-section.component';
import { SectionComponent } from './section/section.component';
import { SectionListComponent } from './section/section-list/section-list.component';
import { SectionItemComponent } from './section/section-list/section-item/section-item.component';
import { SectionDataServicve } from './shared/services/section-data-servicve';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddSectionComponent,
    SectionComponent,
    SectionListComponent,
    SectionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [ SectionDataServicve],
  bootstrap: [AppComponent]
})
export class AppModule { }
