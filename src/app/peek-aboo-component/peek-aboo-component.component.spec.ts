import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeekABooComponentComponent } from './peek-aboo-component.component';

describe('PeekABooComponentComponent', () => {
  let component: PeekABooComponentComponent;
  let fixture: ComponentFixture<PeekABooComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeekABooComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeekABooComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
