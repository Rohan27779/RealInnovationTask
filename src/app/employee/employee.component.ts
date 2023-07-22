// employee.component.ts
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { LocalDataService, User } from '../local-data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  users: User[] = [];
  @ViewChild('noUsersMessage') noUsersMessage!: TemplateRef<any>;
  isSwiping = false;



  constructor(private localDataService: LocalDataService,  private router: Router) {}

  ngOnInit(): void {

    this.localDataService.getAllUsers().then((users) => {
      this.users = users;
    });

  }

  deleteUser(id: number | undefined): void {
    if (id !== undefined) {
      this.localDataService.deleteUser(id).then(() => {
        this.users = this.users.filter((user) => user.id !== id);
      });
    }
  }
  // Method to navigate to edit-details component with user ID
  editUserDetails(id: number): void {
    this.router.navigate(['/edit-details', id]);
  }

  onDragStarted(): void {
    this.isSwiping = true;
  }

  onDragEnded(): void {
    this.isSwiping = false;
  }

}
