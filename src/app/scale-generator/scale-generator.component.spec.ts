import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleGeneratorComponent } from './scale-generator.component';

describe('ScaleGeneratorComponent', () => {
  let component: ScaleGeneratorComponent;
  let fixture: ComponentFixture<ScaleGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
