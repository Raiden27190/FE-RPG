import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsVieComponent } from './points-vie.component';

describe('PointsVieComponent', () => {
  let component: PointsVieComponent;
  let fixture: ComponentFixture<PointsVieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointsVieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointsVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
