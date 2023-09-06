// import { Component, OnInit } from '@angular/core';
// import { UniversityUser } from 'src/app/models/UniversityUser';
// import { UniversityUserService } from 'src/app/services/university-user.service';

// @Component({
//   selector: 'app-registered-student',
//   templateUrl: './registered-student.component.html',
//   styleUrls: ['./registered-student.component.css']
// })
// export class RegisteredStudentComponent implements OnInit {

//   students: UniversityUser[] = [];

//   constructor(private userService: UniversityUserService) {}
//   ngOnInit(): void {
//     this.userService.getAllUniversityUsers().subscribe(students => {
//       this.students = students;
//     });
//   }

// }
import { Component, OnInit } from '@angular/core';
import { UniversityUser } from 'src/app/models/UniversityUser';
import { UniversityUserService } from 'src/app/services/university-user.service';

@Component({
  selector: 'app-registered-student',
  templateUrl: './registered-student.component.html',
  styleUrls: ['./registered-student.component.css']
})
export class RegisteredStudentComponent implements OnInit {

  students: UniversityUser[] = [];

  constructor(private userService: UniversityUserService) {}
  
  ngOnInit(): void {
    this.loadAllStudents();
  }

  loadAllStudents(): void {
    this.userService.getAllUniversityUsers().subscribe(students => {
      this.students = students;
    });
  }

  searchBySeatNo(event: any): void {
    const seatNo = event.target.value.trim();
    if (seatNo !== '') {
      this.userService.getBySeatNo(seatNo).subscribe(student => {
        this.students = student ? [student] : [];
      });
    } else {
      this.loadAllStudents();
    }
  }
}
