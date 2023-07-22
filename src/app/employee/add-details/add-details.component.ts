import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DateAdapter } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { LocalDataService, User } from 'src/app/local-data-service.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent {
  todayDate: Date = new Date();
  selectedDate: Date | null = null;
  roles: string[] = ['product designer', 'flutter developer', 'QA tester', 'Product owner'];
  selectedRole: string | null = null;
  @ViewChild('roleBottomSheet') roleBottomSheet!: TemplateRef<any>;
  @ViewChild('picker1') picker1!: MatDatepicker<any>;
  userName: string = '';

  constructor(private router: Router, private bottomSheet: MatBottomSheet, private _dateAdapter: DateAdapter<any>, private localDataService: LocalDataService) { }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(this.roleBottomSheet);
    bottomSheetRef.afterDismissed().subscribe((role: string | null) => {
      if (role) {
        this.selectedRole = role;
      }
    });
  }

  selectRole(role: string): void {
    this.selectedRole = role;
    this.bottomSheet.dismiss();
  }

  dateClass1 = (date: Date): string => {
    if (this._dateAdapter.sameDate(date, new Date())) {
      return 'custom-today'; // Add custom class for today
    }
    return '';
  };

  selectToday(): void {
    this.todayDate = new Date();
  }

  selectNextMonday(): void {
    let date = this._dateAdapter.today();
    const dayOfWeek = this._dateAdapter.getDayOfWeek(date);
    const daysUntilNextMonday = (dayOfWeek <= 1) ? 8 - dayOfWeek : 15 - dayOfWeek;
    date = this._dateAdapter.addCalendarDays(date, daysUntilNextMonday);
    this.todayDate = date;
  }

  selectNextTuesday(): void {
    let date = this._dateAdapter.today();
    const dayOfWeek = this._dateAdapter.getDayOfWeek(date);
    const daysUntilNextTuesday = (dayOfWeek <= 2) ? 9 - dayOfWeek : 16 - dayOfWeek;
    date = this._dateAdapter.addCalendarDays(date, daysUntilNextTuesday);
    this.todayDate = date;
  }

  selectAfterOneWeek(): void {
    let date = this._dateAdapter.today();
    date = this._dateAdapter.addCalendarDays(date, 7);
    this.todayDate = date;
  }

  saveData(): void {

    const newUser: User = {
      username: this.userName,
      role: this.selectedRole || '',
      startDate: this.todayDate,
      endDate: this.selectedDate,
      id: 0
    };


    this.localDataService.addUser(newUser).then((id) => {
      console.log(`User with ID ${id} added.`);
      this.router.navigate(['/']);
    });
  }

  cancel(): void {

    this.userName = '';
    this.selectedRole = null;
    this.todayDate = new Date();
    this.selectedDate = null;

    this.router.navigate(['/']);
  }
}
