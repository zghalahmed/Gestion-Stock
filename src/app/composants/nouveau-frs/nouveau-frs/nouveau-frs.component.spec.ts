import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauFrsComponent } from './nouveau-frs.component';

describe('NouveauFrsComponent', () => {
  let component: NouveauFrsComponent;
  let fixture: ComponentFixture<NouveauFrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauFrsComponent]
    });
    fixture = TestBed.createComponent(NouveauFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
