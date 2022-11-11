import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SideChatComponent} from "./core/components/side-components/side-chat/side-chat.component";
import {SideFileComponent} from "./core/components/side-components/side-file/side-file.component";
import {SideCourseComponent} from "./core/components/side-components/side-course/side-course.component";
import {SideFaqComponent} from "./core/components/side-components/side-faq/side-faq.component";
import {
  SideCompetenceAreaComponent
} from "./core/components/side-components/side-competence-area/side-competence-area.component";
import {SideNewsBoardComponent} from "./core/components/side-components/side-news-board/side-news-board.component";
import {
  SideNotifyEventComponent
} from "./core/components/side-components/side-notify-event/side-notify-event.component";
import {SideJobSystemComponent} from "./core/components/side-components/side-job-system/side-job-system.component";
import { CardMenuComponent } from './core/components/card-menu/card-menu.component';

const routes: Routes = [
  {path: 'side-chat-component', component: SideChatComponent},
  {path: 'side-file-component', component: SideFileComponent},
  {path: 'side-course-component', component: SideCourseComponent},
  {path: 'side-faq-component', component: SideFaqComponent},
  {path: 'side-notify-event-component', component: SideNotifyEventComponent},
  {path: 'side-news-board-component', component: SideNewsBoardComponent},
  {path: 'side-competence-area-component', component: SideCompetenceAreaComponent},
  {path: 'side-job-system-component', component: SideJobSystemComponent},
  {path: '', component: CardMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
