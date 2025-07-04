import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundaryButtonComponent } from './secundary-button.component';

describe('SecundaryButtonComponent', () => {
  let component: SecundaryButtonComponent;
  let fixture: ComponentFixture<SecundaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecundaryButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecundaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
