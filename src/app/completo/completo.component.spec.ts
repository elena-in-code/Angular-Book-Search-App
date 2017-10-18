import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletoComponent } from './completo.component';

describe('CompletoComponent', () => {
  let component: CompletoComponent;
  let fixture: ComponentFixture<CompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
