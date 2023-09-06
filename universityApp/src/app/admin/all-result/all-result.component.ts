import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result.service'; // Adjust the path accordingly
import { Result } from '../../models/Result'; // Adjust the path accordingly

@Component({
  selector: 'app-all-result',
  templateUrl: './all-result.component.html',
  styleUrls: ['./all-result.component.css']
})
export class AllResultComponent implements OnInit {
  results: Result[] = []; // Array to hold all results

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    // Load all results when the component initializes
    this.loadAllResults();
  }

  loadAllResults(): void {
    this.resultService.getAllResults().subscribe(
      results => {
        this.results = results;
      },
      error => {
        console.error('Error fetching results:', error);
      }
    );
  }
}
