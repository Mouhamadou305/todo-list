import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListOfTasksComponent } from './list-of-tasks/component/list-of-tasks.component';
import { ListOfTasksService } from './list-of-tasks/service/list-of-tasks.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListOfTasksComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [ListOfTasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
