import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntipatternsComponent } from './antipatterns.component';

describe('AntipatternsComponent', () => {
  let component: AntipatternsComponent;
  let fixture: ComponentFixture<AntipatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntipatternsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntipatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
