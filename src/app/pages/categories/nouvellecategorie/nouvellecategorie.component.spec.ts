import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellecategorieComponent } from './nouvellecategorie.component';

describe('NouvellecategorieComponent', () => {
  let component: NouvellecategorieComponent;
  let fixture: ComponentFixture<NouvellecategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvellecategorieComponent]
    });
    fixture = TestBed.createComponent(NouvellecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
