import { Component, OnInit } from '@angular/core';
import { UniversityUser } from '../models/UniversityUser';
import { UniversityUserService } from '../services/university-user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: UniversityUser[] = [];

  constructor(private userService: UniversityUserService) {}
  ngOnInit(): void {
    this.userService.getAllUniversityUsers().subscribe(users => {
      this.users = users;
    });
  }
  

}
