import { Component, OnInit } from '@angular/core';
import { DataService, IUser } from '../data.service';

@Component({
  selector: 'app-question-a',
  template: `
    <h2>Question A</h2>
    <ul>
      <li>
      </li>
    </ul>
  `,
})
export class QuestionAComponent implements OnInit {
  /**
   * QUESTIONS:
   * 1. How could you list the first names of all the users stored in variable "users" with Angular?
   * 2. If there would be a performance issue, how could you improve the performance?
   * 3. You want to call the "clear" function of the DataService when leaving the component. Where could you do this?
   */

  users: IUser[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }
}
