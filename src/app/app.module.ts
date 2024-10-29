import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppComponent,
    TaskComponent,
  ],
  exports: [TaskComponent],
  bootstrap: [],
})
export class AppModule {}
