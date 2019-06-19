import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListenComponent } from './app-listen.component';

describe('AppListenComponent', () => {
  let component: AppListenComponent;
  let fixture: ComponentFixture<AppListenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
