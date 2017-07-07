import { Component, Input, Inject, forwardRef } from '@angular/core';
import { Task } from '../../models/task';
import { Tag } from '../../models/tag';
import { Mocks } from '../../shared/mocks';
import { BoardComponent } from '../board.component';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss', '../../../../node_modules/dragula/dist/dragula.css'],
})

export class TaskListComponent{
  @Input() tasks;
  @Input() tags;
  @Input() selectedTag;
  @Input() state;
  @Input() shared;
  @Input() theTitle;

  hoverTag: any = null;

  constructor(@Inject(forwardRef(() => BoardComponent)) private _parent:BoardComponent){

  }

  deleteTagFromTask(task: Task, tag: Tag): void {
    this._parent.deleteTagFromTask(task, tag);
  }

  containTag(tagId: number, tags: Tag[]){
    return tags.map(c => c.id).includes(tagId);
  }

  addOrDeleteTagFromTask(tag: Tag, task: Task){
    this._parent.addOrDeleteTagFromTask(tag, task);
  }

  addTagToTask(task: Task, tag: Tag): void {
    this._parent.addTagToTask(task,tag);
  }

  deleteTask(task: Task): void {
    this._parent.deleteTask(task);
  }

  sync(): void {
    this._parent.sync();
  }

  setSelectedTag(tag : Tag) : void {
    this._parent.setSelectedTag(tag);
  }

  addTask() : void {
    this._parent.addTask();
  }
}