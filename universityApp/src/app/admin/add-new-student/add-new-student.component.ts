import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniversityUserService } from 'src/app/services/university-user.service';
import { UniversityUser } from 'src/app/models/UniversityUser';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent implements OnInit {

  newCandidateForm!: FormGroup; // Declare the form group
  currentStep: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UniversityUserService
  ) { this.newCandidateForm = this.formBuilder.group({
    // Define your form controls here
  });}

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  ngOnInit(): void {
    this.newCandidateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fullName: ['', Validators.required],
      motherName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      seatNo: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      prn: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      aadhaarNo: ['', Validators.required],
      studentCollageName: ['', Validators.required],
      course: ['', Validators.required],
      branch: ['', Validators.required],
      role: ['', Validators.required],
      year: ['', Validators.required],
      address: this.formBuilder.group({ // Nested form group for Address
        houseNumber: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pincode: ['', Validators.required]
      })
    });
  }

  addNewCandidate(): void {
    console.log('Add Candidate Method Called');
    // if (this.newCandidateForm.valid) {
      const newCandidate: UniversityUser = this.newCandidateForm.value;
      this.userService.addNewCandidateForUniversity(newCandidate).subscribe(
        () => {
          // Candidate added successfully
          console.log('Candidate added successfully');
        },
        (error) => {
          // Handle error here
          console.error('Error adding candidate:', error);
        }
      );
    }
  }
// }
