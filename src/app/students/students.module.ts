import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentsComponent } from './students.component';
import { SortFilterPipe } from '../shared/pipes/sort-filter.pipe';
import { FilterGroupPipe } from '../shared/pipes/filter-group.pipe';
import { FilterFacultyPipe } from '../shared/pipes/filter-faculty.pipe';


@NgModule({
  declarations: [StudentsComponent, StudentListComponent, StudentEditComponent, SortFilterPipe, FilterGroupPipe, FilterFacultyPipe],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule
  ]
})
export class StudentsModule { }
