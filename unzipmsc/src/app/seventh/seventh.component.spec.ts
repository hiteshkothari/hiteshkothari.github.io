import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SeventhComponent } from './seventh.component';
describe('SeventhComponent', () => {
  let component: SeventhComponent;
  let fixture: ComponentFixture<SeventhComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SeventhComponent]
    });
    fixture = TestBed.createComponent(SeventhComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
