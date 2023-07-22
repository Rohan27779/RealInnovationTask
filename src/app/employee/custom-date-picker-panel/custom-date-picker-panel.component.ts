import { Component, Inject } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-custom-date-picker-panel',
  templateUrl: './custom-date-picker-panel.component.html',
  styleUrls: ['./custom-date-picker-panel.component.scss']
})
export class CustomDatePickerPanelComponent {
  todayDate: Date = new Date();

  constructor(
    @Inject(MAT_DATE_LOCALE) public dateLocale: string,
    private _dateAdapter: DateAdapter<any>
  ) {}


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

}
