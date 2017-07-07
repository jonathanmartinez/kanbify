import { Component, ViewEncapsulation } from '@angular/core';
import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula';
import { Task } from '../models/task';
import { Tag } from '../models/tag';
import { Color } from '../models/color';
import { Mocks } from '../shared/mocks';

@Component({
  selector: 'my-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],

})

export class BoardComponent{
  lastSync: Date = new Date();

  //this object will be available on the child components
  shared = {
    todoAt: null,
    doingAt: null,
    doneAt: null,
    search: null,
    selectedTag: null,
  };

  //check if exist in localStorage
  tasks = this.myGetItem('tasks') || Mocks.TASKS;
  tags = this.myGetItem('tags') || Mocks.TAGS;
  colors = Mocks.COLORS;
  tit = "pepe";

  constructor(private dragulaService: DragulaService) {
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
  }

  addTask(): void {
    let ids = this.tasks.map(t => t.id);
    var t = {
      id: ids.length > 0 ? Math.max(...ids)+1 : 1,//next id available,
      description: '',
      state: 'todo',
      todoDate: new Date(),
      doingDate: null,
      doneDate: null,
      tags: [],
    }

    this.shared.selectedTag ? t.tags.push(this.shared.selectedTag) : null; //add task to the current tag

    this.tasks.unshift(t);
    this.sync();

    setTimeout(function() {
      window.document.getElementsByName("task")[0].focus();
    }, 100);
  }

  reset() : void {
    this.tasks = Mocks.TASKS;
    this.tags = Mocks.TAGS;
    this.sync();
  }

  deleteTask(task: Task): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.sync();
  }

  deleteTag(tag: Tag): void {
    this.tags.splice(this.tags.indexOf(tag), 1);
    this.tasks.forEach(function(task, i){
      task.tags.forEach(function(cat, j){
        if(tag.id == cat.id){
          task.tags.splice(task.tags.indexOf(cat), 1);
        }
      })
    })
    this.sync();
  }

  //Change task state if drops on a different state (to do, doing, done)
  private onDrop(args) {
    let [e, el] = args;
    this.tasks.forEach(function (task, i) {
      if(task.id == e.dataset.id){
        this.tasks[i].state = el.id;
        if(el.id == 'doing' && this.tasks[i].doingDate == null){
          this.tasks[i].doingDate = new Date();
        }
        if(el.id == 'done' && this.tasks[i].doneDate == null){
          this.tasks[i].doneDate = new Date();
        }
      }
    }, this)
    this.sync();
  }

  setSelectedTag(tag : Tag) : void {
    this.shared.selectedTag = tag;
    this.sync();
  }

  sync() : void{
    this.tasks ? this.mySetItem('tasks', this.tasks) : null;
    this.tags ? this.mySetItem('tags', this.tags) : null;
    this.lastSync = new Date();
    console.log("sync");
  }

  addTag(): void {
    let ids = this.tags.map(c => c.id);
    let nextColorAvailable;
    //set next available color to the new tag
    this.colors.forEach(function(color, i){
      if(this.tags.map(c => c.id).includes(color.id)){
        if(i+1<this.colors.length){
          nextColorAvailable = this.colors[i+1];
        }
        else{
          nextColorAvailable = this.colors[i];
        }
        return false;
      }
    }, this)

    this.tags.push({
      id: ids.length > 0 ? Math.max(...ids)+1 : 1,//next id available
      name: '',
      color: nextColorAvailable,
    });
    this.sync();

    //focus new tag
    setTimeout(function() {
      var element = window.document.getElementsByName("tag")
      element[element.length-1].focus();
    }, 100);
  }

  myGetItem(key: string){
    var result = JSON.parse(localStorage.getItem(key));

    switch(key){
      case 'tasks':
      if(result){
        result.forEach(function(task, i){
          task.todoDate = new Date(task.todoDate);
        })
      }
      break;
      default:
      break;
    }
    return result;
  }

  mySetItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  shortcut(event){
    if (event.ctrlKey && event.keyCode == 78) {
      this.addTask();
    }
    if (event.ctrlKey && event.keyCode == 66) {
      this.addTag();
    }
  }

  deleteTasksWithTag(tag: Tag): void {
    var self = this;
    var tasksCopy = this.tasks
    //use a copy of tasks to iterate and delete inside the loop
    tasksCopy.forEach(function(task, i){
      console.log(self.tasks);
      task.tags.forEach(function(cat, i){
        if(cat.id == tag.id){
          self.tasks.splice(self.tasks.indexOf(task), 1);
        }
      })
    })

    this.tags.splice(this.tags.indexOf(tag), 1);
    this.sync();
  }

  countTasks(tag: Tag){
    return this.tasks.filter( t => t.tags.filter(c => tag.id == c.id) ).length;
  }

  addTagToTask(task: Task, tag: Tag): void {
    task.tags.push(tag);
    this.sync();
  }

  addOrDeleteTagFromTask(tag: Tag, task: Task){
    if(task.tags.map(c => c.id).includes(tag.id)){
      this.deleteTagFromTask(task, tag);
    }
    else{
      this.addTagToTask(task, tag);
    }
  }

  deleteTagFromTask(task: Task, tag: Tag): void {
    task.tags.splice(task.tags.indexOf(tag), 1);
    this.sync();
  }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0];
    var myReader:any = new FileReader();
    var self = this;

    myReader.onloadend = function(e){
      self.tasks = JSON.parse(myReader.result).tasks;
      self.tags = JSON.parse(myReader.result).tags;
    }

    myReader.readAsText(file);
  }

  containTag(tagId: number, tags: Tag[]){
    return tags.map(c => c.id).includes(tagId);
  }

}
