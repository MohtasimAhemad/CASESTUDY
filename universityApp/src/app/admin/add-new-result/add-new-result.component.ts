import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result.service'; // Adjust the path accordingly
import { Result } from '../../models/Result'; // Adjust the path accordingly
import { Subject } from '../../models/Subject';

@Component({
  selector: 'app-add-new-result',
  templateUrl: './add-new-result.component.html',
  styleUrls: ['./add-new-result.component.css']
})
export class AddNewResultComponent implements OnInit {
  newResult: Result = new Result('', []); // Create an instance of Result to hold new data
  maxSubjects = 5; // Maximum number of subjects allowed

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    // Initialize the newResult with 5 empty subjects
    for (let i = 0; i < this.maxSubjects; i++) {
      this.newResult.subject.push(new Subject());
    }
  }

  addResult(): void {
    // Call the service to add the result
    this.resultService.addResult(this.newResult).subscribe(() => {
      console.log('Result added successfully');
      // Optionally, you can reset the newResult object for adding more results
      this.newResult = new Result('', []);
    }, error => {
      console.error('Error adding result:', error);
    });
  }
}
