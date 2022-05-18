import { COLS, BLOCK_SIZE, ROWS } from '../constants';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mycanvas',
  templateUrl: './mycanvas.component.html',
  styleUrls: ['./mycanvas.component.css']
})


export class MycanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('board', { static: false }) 
  canvas!: ElementRef<HTMLCanvasElement>;
  private ctx:any = CanvasRenderingContext2D;
  points!: number;
  lines!: number;
  level!: number;

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;

    this.draw();
  }
   x:number = 10;
  draw() {
    
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, 10, 50, 50);
  }
  ngOnInit(): void {
  }
  play() {}

}
