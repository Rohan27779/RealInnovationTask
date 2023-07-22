import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataService, User } from '../../local-data-service.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss'],
})
export class EditDetailsComponent implements OnInit {

  user: User = {
    username: '',
    role: '',
    startDate: new Date(),
    endDate: null,
    id: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localDataService: LocalDataService
  ) {}

  ngOnInit(): void {
    // Retrieve the user ID from the route parameters
    this.route.params.subscribe((params) => {
      const userId = parseInt(params['id'], 10);
      if (!isNaN(userId)) {
        this.localDataService.getUserById(userId).then((user) => {
          if (user) {
            this.user = user;
          }
        });
      }
    });
  }

  saveChanges(): void {
    this.localDataService.updateUser(this.user).then(() => {
      console.log('User details updated.');
      this.router.navigate(['/employee']);
    });
  }

  cancel(): void {
    this.router.navigate(['/employee']);
  }
}
