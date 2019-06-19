import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FifthComponent } from './fifth.component';
describe('FifthComponent', () => {
  let component: FifthComponent;
  let fixture: ComponentFixture<FifthComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FifthComponent]
    });
    fixture = TestBed.createComponent(FifthComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
