import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SixthComponent } from './sixth.component';
describe('SixthComponent', () => {
  let component: SixthComponent;
  let fixture: ComponentFixture<SixthComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SixthComponent]
    });
    fixture = TestBed.createComponent(SixthComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
