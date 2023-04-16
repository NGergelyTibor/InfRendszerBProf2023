import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsUniverseComponent } from './ms-universe.component';

describe('MsUniverseComponent', () => {
  let component: MsUniverseComponent;
  let fixture: ComponentFixture<MsUniverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsUniverseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
