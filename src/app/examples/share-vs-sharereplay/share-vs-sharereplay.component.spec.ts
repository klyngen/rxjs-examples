import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareVsSharereplayComponent } from './share-vs-sharereplay.component';

describe('ShareVsSharereplayComponent', () => {
  let component: ShareVsSharereplayComponent;
  let fixture: ComponentFixture<ShareVsSharereplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareVsSharereplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareVsSharereplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
