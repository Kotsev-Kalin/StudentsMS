import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: string;
  student: Student;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
              private studentService: StudentService) { }

  ngOnInit() {
    // this.student = new Student();

    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
    this.submitted = false;
  }

  updateStudent() {
    this.studentService.updateStudent(this.id, this.student)
      .subscribe(data => {
        console.log(data);
        this.student = new Student();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateStudent();
  }

  gotoList() {
    this.router.navigate(['/students']);
  }
}
