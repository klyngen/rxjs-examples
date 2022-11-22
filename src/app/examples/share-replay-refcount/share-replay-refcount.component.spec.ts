import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplayRefcountComponent } from './share-replay-refcount.component';

describe('ShareReplayRefcountComponent', () => {
  let component: ShareReplayRefcountComponent;
  let fixture: ComponentFixture<ShareReplayRefcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareReplayRefcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareReplayRefcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
