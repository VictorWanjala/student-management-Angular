import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit{

  constructor(private student: StudentsService){}
  studentData :any=[];
  ngOnInit(): void {
    this.student.getAllStudent().subscribe((allData)=>{
      console.log(allData);
      this.studentData = allData
    });
  }

deleteStudent(student_id: any){
// console.log(student_id)
this.student.deleteStudent(student_id).subscribe((result)=>{
  // console.log(result)
  this.ngOnInit();
})
}

}
