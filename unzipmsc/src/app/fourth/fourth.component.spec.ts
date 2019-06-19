import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FourthComponent } from './fourth.component';
describe('FourthComponent', () => {
  let component: FourthComponent;
  let fixture: ComponentFixture<FourthComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FourthComponent]
    });
    fixture = TestBed.createComponent(FourthComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
