import { Component, OnInit } from '@angular/core';
import { Student, Faculties } from 'src/app/shared/models/student.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/shared/services/student.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id: number;
  student: Student;
  studentForm: FormGroup;
  faculties = Faculties;
  maskPhone = ['\+', '7', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  maskDate = [/[0-3]/, /\d/, '.', /[0-1]/, /\d/, '.', /[1-2]/, /\d/, /\d/, /\d/];


  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router) {
      this.activatedRoute.params.subscribe(params => {
        if (!isNullOrUndefined(params.id)) {
          this.id = +params.id;
        } else {
          this.id = null;
        }
      });
    }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      date: new FormControl(null, [Validators.required]),
      faculty: new FormControl(null, [Validators.required]),
      group: new FormControl(null, [Validators.required]),
    });
    this.getStudents();
  }

  async onSave() {
    this.studentForm.value.faculty = this.studentForm.value.faculty;
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.studentService.putStudent(this.id, this.studentForm.value);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        let res = await this.studentService.postStudent(this.studentForm.value)
        this.router.navigate([this.router.url, res.id]);
        this.getStudents();
      } catch (err) {
        console.error(err);
      }
    }
  }
  async onDelete() {
    try {
      await this.studentService.deleteStudent(this.id);
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/students']);
  }
  async getStudents() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let student = this.studentService.getStudent(this.id);
        this.student = await student;
      } catch (err) {
        console.log(err);
      }
      this.studentForm.patchValue({
        name: this.student.name,
        surname: this.student.surname,
        patronymic: this.student.patronymic,
        phone: this.student.phone,
        email: this.student.email,
        date: this.student.date,
        faculty: this.student.faculty,
        group: this.student.group
      });
    }
  }
}
