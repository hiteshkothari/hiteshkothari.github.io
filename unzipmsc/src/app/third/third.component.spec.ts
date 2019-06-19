import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ThirdComponent } from './third.component';
describe('ThirdComponent', () => {
  let component: ThirdComponent;
  let fixture: ComponentFixture<ThirdComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ThirdComponent]
    });
    spyOn(ThirdComponent.prototype, 'setSpeakingSettings');
    spyOn(ThirdComponent.prototype, 'getLanguagesSupported');
    fixture = TestBed.createComponent(ThirdComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(ThirdComponent.prototype.setSpeakingSettings).toHaveBeenCalled();
      expect(ThirdComponent.prototype.getLanguagesSupported).toHaveBeenCalled();
    });
  });
  describe('getLanguagesSupported', () => {
    it('makes expected calls', () => {
      (<jasmine.Spy>component.setSpeakingSettings).calls.reset();
      (<jasmine.Spy>component.getLanguagesSupported).and.callThrough();
      component.getLanguagesSupported();
      expect(component.setSpeakingSettings).toHaveBeenCalled();
    });
  });
});
