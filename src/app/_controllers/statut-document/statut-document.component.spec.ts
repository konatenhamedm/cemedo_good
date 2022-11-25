import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutDocumentComponent } from './statut-document.component';

describe('StatutDocumentComponent', () => {
  let component: StatutDocumentComponent;
  let fixture: ComponentFixture<StatutDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
