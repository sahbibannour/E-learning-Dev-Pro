import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeuserComponent } from './homeuser.component';

describe('HomeuserComponent', () => {
  let component: HomeuserComponent;
  let fixture: ComponentFixture<HomeuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
