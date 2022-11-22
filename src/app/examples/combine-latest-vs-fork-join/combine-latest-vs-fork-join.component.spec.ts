import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestVsForkJoinComponent } from './combine-latest-vs-fork-join.component';

describe('CombineLatestVsForkJoinComponent', () => {
  let component: CombineLatestVsForkJoinComponent;
  let fixture: ComponentFixture<CombineLatestVsForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestVsForkJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestVsForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
