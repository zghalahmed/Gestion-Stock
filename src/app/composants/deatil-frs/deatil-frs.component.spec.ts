import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilFrsComponent } from './deatil-frs.component';

describe('DeatilFrsComponent', () => {
  let component: DeatilFrsComponent;
  let fixture: ComponentFixture<DeatilFrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeatilFrsComponent]
    });
    fixture = TestBed.createComponent(DeatilFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
