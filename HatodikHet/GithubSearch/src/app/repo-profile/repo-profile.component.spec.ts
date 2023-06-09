import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoProfileComponent } from './repo-profile.component';

describe('RepoProfileComponent', () => {
  let component: RepoProfileComponent;
  let fixture: ComponentFixture<RepoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
