import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes  } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('onOff', [
      state('on', style({
        backgroundColor: 'yellow',
        color: 'black'
      })),
      state('off', style({
        backgroundColor: 'black'
      })),
      transition('on <=> off', [animate('2s 0.1s', style({transform: 'rotate(90deg)'}))])
    ])
    
    
  ],
})
export class AnimationsComponent implements OnInit {

  roomState: string = 'on';

  toggleLights() {
    this.roomState = (this.roomState == 'on') ? 'off' : 'on';
  }
  ngOnInit(): void {
  }

}
