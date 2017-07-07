import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'bottom-bar',
  templateUrl: './bottom-bar.component.html',
})

export class BottomBarComponent{
  @Input() lastSync;
}