import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombastoComponent } from './bombasto.component';

describe('BombastoComponent', () => {
  let component: BombastoComponent;
  let fixture: ComponentFixture<BombastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BombastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BombastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
