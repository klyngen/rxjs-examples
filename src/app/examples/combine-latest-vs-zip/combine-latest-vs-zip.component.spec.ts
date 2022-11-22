import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestVsZipComponent } from './combine-latest-vs-zip.component';

describe('CombineLatestVsZipComponent', () => {
  let component: CombineLatestVsZipComponent;
  let fixture: ComponentFixture<CombineLatestVsZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestVsZipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestVsZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
