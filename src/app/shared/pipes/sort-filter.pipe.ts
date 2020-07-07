import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFilter'
})
export class SortFilterPipe implements PipeTransform {

  transform(students: any[]): any[] {
    return students.sort((student1, student2) => student1.surname > student2.surname ? 1: -1);
  }
}