import { Component, OnInit } from '@angular/core';
import { Student, Faculties } from 'src/app/shared/models/student.model';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/shared/services/student.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  isLoaded = false;
  selectGroup = '';
  selectFaculty = '';
  students: Student[];
  faculties = Faculties;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getStudents().then(() => { this.isLoaded = true; console.log('База данных студенты успешно загружена!') } );
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile']);
  }
  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id]);
  }
  getFaculty(faculty: number) {
    switch (faculty) {
      case Faculties.IT: return 'ИТ';
      case Faculties.Engineering: return 'Инженерный';
      case Faculties.Math: return 'Математический';
      case Faculties.Economic: return 'Экономический';
      default: console.error(faculty); return 'Ошибка факультета';
    }
  }

  async getStudents() {
    try {
      let students = this.studentService.getAll();
      this.students = isNullOrUndefined(await students) ? [] : await students;
    } catch (err) {
      console.error(err);
    }
  }
}
