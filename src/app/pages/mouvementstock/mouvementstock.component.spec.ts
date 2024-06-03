import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvementstockComponent } from './mouvementstock.component';

describe('MouvementstockComponent', () => {
  let component: MouvementstockComponent;
  let fixture: ComponentFixture<MouvementstockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouvementstockComponent]
    });
    fixture = TestBed.createComponent(MouvementstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
