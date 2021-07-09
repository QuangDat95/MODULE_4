import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDataDrivenBuilderComponent } from './v-data-driven-builder.component';

describe('VDataDrivenBuilderComponent', () => {
  let component: VDataDrivenBuilderComponent;
  let fixture: ComponentFixture<VDataDrivenBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VDataDrivenBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VDataDrivenBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
