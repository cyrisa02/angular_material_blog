import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdinblogComponent } from './amdinblog.component';

describe('AmdinblogComponent', () => {
  let component: AmdinblogComponent;
  let fixture: ComponentFixture<AmdinblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdinblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmdinblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
