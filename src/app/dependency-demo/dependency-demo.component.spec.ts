import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyDemoComponent } from './dependency-demo.component';

describe('DependencyDemoComponent', () => {
  let component: DependencyDemoComponent;
  let fixture: ComponentFixture<DependencyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
