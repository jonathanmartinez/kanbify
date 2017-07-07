import { Component, Input, Output, EventEmitter, OnInit, Inject, forwardRef } from '@angular/core';
import { Mocks } from '../../shared/mocks';
import { BoardComponent } from '../board.component';


@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})

export class TopBarComponent{
  @Input() tasks;
  @Input() tags;
  @Input() shared;

  constructor(@Inject(forwardRef(() => BoardComponent)) private _parent:BoardComponent){

  }

  downloadBackup(){
    var storageObj = {tasks: this.tasks, tags: this.tags};
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storageObj));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();
  }

  clickFile(){
    document.getElementById('fileinput').click();
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any) : void {
    this._parent.readThis(inputValue);
  }

  sync(): void {
    this._parent.sync();
  }

  reset(): void {
    this._parent.reset();
  }

}