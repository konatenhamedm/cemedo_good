import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentIdentiteComponent } from './document-identite.component';

describe('DocumentIdentiteComponent', () => {
  let component: DocumentIdentiteComponent;
  let fixture: ComponentFixture<DocumentIdentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentIdentiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentIdentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
