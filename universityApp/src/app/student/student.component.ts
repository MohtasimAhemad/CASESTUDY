import { Component, OnInit } from '@angular/core';
import { UniversityUserService } from '../services/university-user.service'; // Adjust the path accordingly
import { UniversityUser } from '../models/UniversityUser'; // Adjust the path accordingly
import * as html2pdf from 'html2pdf.js'; // Import the html2pdf module


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  seatNo: string = ''; 
  motherName: string = '';
  universityUser!: UniversityUser ; 
  constructor(private universityUserService: UniversityUserService) { }

  ngOnInit(): void {
  }

  // searchUser(): void {
  //   if (this.seatNo.trim() !== '') {
  //     this.universityUserService.getBySeatNo(this.seatNo).subscribe(
  //       user => {
  //         this.universityUser = user;
  //       },
  //       error => {
  //         console.error('Error fetching user:', error);
  //         this.universityUser = this.universityUser;
  //       }
  //     );
  //   }
  // }
  searchUser(): void {
    if (this.seatNo.trim() !== '' && this.motherName.trim() !== '') {
      this.universityUserService
        .searchUserBySeatNoAndMotherName(this.seatNo, this.motherName)
        .subscribe(
          (user) => {
            this.universityUser = user;
          },
          (error) => {
            console.error('Error fetching user:', error);
            this.universityUser =  this.universityUser;
          }
        );
    }
  }
  calculateTotalObtainedMarks(): number {
    if (!this.universityUser || !this.universityUser.result || !this.universityUser.result.subject) {
      return 0;
    }
    
    return this.universityUser.result.subject.reduce(
      (totalMarks, subject) => totalMarks + subject.obtainedMark,
      0
    );
  }
  printResult(): void {
    window.print();
  }

  downloadResultPDF(): void {
    const options = {
      margin: 10,
      filename: 'result.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
  
    const content = document.getElementById('result-table')!; // Make sure to set an id on your <table> element
    html2pdf().from(content).set(options).save();
  }
  
}
