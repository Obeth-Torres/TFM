import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistaDetailComponent } from './analista-detail.component';

describe('AnalistaDetailComponent', () => {
  let component: AnalistaDetailComponent;
  let fixture: ComponentFixture<AnalistaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalistaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalistaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
