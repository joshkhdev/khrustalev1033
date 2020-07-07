import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filterGroup'
})
export class FilterGroupPipe implements PipeTransform {

  transform(students: any[], group: string): any[] {
    if (group === '') {
      return students;
    } else {
      return students.filter((student) => student.group == group);
    }
  }

}
