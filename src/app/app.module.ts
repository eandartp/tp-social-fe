import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SideNavComponent} from './core/components/side-nav/side-nav.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {SideChatComponent} from './core/components/side-components/side-chat/side-chat.component';
import {MatListModule} from "@angular/material/list";
import {ChatComponent} from './core/components/chat/chat.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatSelectFilterModule} from "mat-select-filter";
import {MatButtonModule} from "@angular/material/button";
import {SideFileComponent} from './core/components/side-components/side-file/side-file.component';
import {FileListComponent} from './core/components/file-list/file-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SideCourseComponent} from './core/components/side-components/side-course/side-course.component';
import {CourseComponent} from './core/components/course/course.component';
import {SideFaqComponent} from './core/components/side-components/side-faq/side-faq.component';
import {SideNewsBoardComponent} from './core/components/side-components/side-news-board/side-news-board.component';
import {
  SideCompetenceAreaComponent
} from './core/components/side-components/side-competence-area/side-competence-area.component';
import {
  SideNotifyEventComponent
} from './core/components/side-components/side-notify-event/side-notify-event.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatExpansionModule} from "@angular/material/expansion";
import {FaqComponent} from './core/components/faq/faq.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {CompetenceAreaComponent} from './core/components/competence-area/competence-area.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {EventEmiterService} from './core/services/utility/event.emmiter.service';
import {ChatModalComponent} from './core/components/chat/chat-modal/chat-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {SideJobSystemComponent} from './core/components/side-components/side-job-system/side-job-system.component';
import {JobSystemComponent} from './core/components/job-system/job-system.component';
import {HttpClientModule} from "@angular/common/http";
import { CardMenuComponent } from './core/components/card-menu/card-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SideChatComponent,
    ChatComponent,
    SideFileComponent,
    FileListComponent,
    SideCourseComponent,
    CourseComponent,
    SideFaqComponent,
    SideNewsBoardComponent,
    SideCompetenceAreaComponent,
    SideNotifyEventComponent,
    FaqComponent,
    CompetenceAreaComponent,
    ChatModalComponent,
    SideJobSystemComponent,
    JobSystemComponent,
    CardMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    TextFieldModule,
    FormsModule,
    MatSelectFilterModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule,
    MatBadgeModule,
    HttpClientModule,
    PdfViewerModule,
  ],
  providers: [EventEmiterService, {provide: MAT_DATE_LOCALE, useValue: 'it-IT'},
    {provide: LOCALE_ID, useValue: 'it-IT'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
