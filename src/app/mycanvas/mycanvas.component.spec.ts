import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycanvasComponent } from './mycanvas.component';

describe('MycanvasComponent', () => {
  let component: MycanvasComponent;
  let fixture: ComponentFixture<MycanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
