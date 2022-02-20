import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-c',
  template: `
    <h2>Question C</h2>
    <p> -- Render the data here -- </p>
  `,
})
export class QuestionCComponent {
  /**
   * The observable data$ provides a string.
   *
   * QUESTIONS:
   *
   * 1. How can you render the data in the observable with Angular?
   * 2. What is the difference between a cold and a hot observable?
   * 3. How can you manipulate the data of the observable e.g. putting the string into single quotemark: ''
   */

  data$: Observable<string>;

  constructor(dataService: DataService) {
    this.data$ = dataService.data$;
  }
}
