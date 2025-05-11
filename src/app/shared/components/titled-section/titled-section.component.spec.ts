import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledSectionComponent } from './titled-section.component';

describe('TitledSectionComponent', () => {
  let component: TitledSectionComponent;
  let fixture: ComponentFixture<TitledSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitledSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitledSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
