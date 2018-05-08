import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula';
import { SearchFilterPipe } from './shared/search-filter.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { StateFilterPipe } from './shared/state-filter.pipe';
import { DateFilterPipe } from './shared/date-filter.pipe';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { FormsModule }   from '@angular/forms';
import { DatepickerModule } from 'angular2-material-datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagFilterPipe } from './shared/tag-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { TooltipDirective } from 'ng2-tooltip-directive/components';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { TaskListComponent } from './board/task-list/task-list.component';
import { BottomBarComponent } from './board/bottom-bar/bottom-bar.component';
import { TopBarComponent } from './board/top-bar/top-bar.component';
import { SideBarComponent } from './board/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, BoardComponent, TaskListComponent, BottomBarComponent, TopBarComponent, SideBarComponent, SearchFilterPipe, StateFilterPipe, DateFilterPipe, TagFilterPipe, TooltipDirective
  ],
  imports: [
    AppRoutingModule, BrowserModule, DragulaModule, OrderModule, FormsModule, DatepickerModule, BrowserAnimationsModule, TextareaAutosizeModule, NgbModule.forRoot(), RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
