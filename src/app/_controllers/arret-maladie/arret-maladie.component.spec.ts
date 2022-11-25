import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArretMaladieComponent } from './arret-maladie.component';

describe('ArretMaladieComponent', () => {
  let component: ArretMaladieComponent;
  let fixture: ComponentFixture<ArretMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArretMaladieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArretMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
