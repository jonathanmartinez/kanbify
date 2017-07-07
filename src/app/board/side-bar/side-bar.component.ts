import { Component, Input, Output, EventEmitter, OnInit, Inject, forwardRef } from '@angular/core';
import { Mocks } from '../../shared/mocks';
import { BoardComponent } from '../board.component';
import { Task } from '../../models/task';
import { Tag } from '../../models/tag';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss', '../../../../node_modules/dragula/dist/dragula.css'],
})

export class SideBarComponent{
  @Input() tasks;
  @Input() tags;
  @Input() shared;

  constructor(@Inject(forwardRef(() => BoardComponent)) private _parent:BoardComponent){

  }

  sync(): void {
    this._parent.sync();
  }

  setSelectedTag(tag : Tag) : void {
    this._parent.setSelectedTag(tag);
  }

  deleteTasksWithTag(tag: Tag): void {
    this._parent.deleteTasksWithTag(tag);
  }

  deleteTag(tag: Tag): void {
    this._parent.deleteTag(tag);
  }

  addTag(): void {
    this._parent.addTag();
  }

}