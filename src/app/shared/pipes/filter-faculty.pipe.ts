import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFaculty'
})
export class FilterFacultyPipe implements PipeTransform {

  transform(students: any[], faculty: any): any[] {
    if (faculty === '') {
      return students;
    } else {
      return students.filter((student) => student.faculty == faculty);
    }
  }

}
