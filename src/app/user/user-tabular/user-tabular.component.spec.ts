import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabularComponent } from './user-tabular.component';

describe('UserTabularComponent', () => {
  let component: UserTabularComponent;
  let fixture: ComponentFixture<UserTabularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTabularComponent]
    });
    fixture = TestBed.createComponent(UserTabularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
