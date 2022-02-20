import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionAComponent } from './question-a/question-a.component';
import { QuestionBComponent } from './question-b/question-b.component';
import { QuestionCComponent } from './question-c/question-c.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'question-a',
    pathMatch: 'full',
  },
  {
    path: 'question-a',
    component: QuestionAComponent,
  },
  {
    path: 'question-b',
    component: QuestionBComponent,
  },
  {
    path: 'question-c',
    component: QuestionCComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
