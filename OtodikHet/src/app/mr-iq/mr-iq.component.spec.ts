import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrIQComponent } from './mr-iq.component';

describe('MrIQComponent', () => {
  let component: MrIQComponent;
  let fixture: ComponentFixture<MrIQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrIQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrIQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
