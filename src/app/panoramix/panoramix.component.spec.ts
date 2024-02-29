import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramixComponent } from './panoramix.component';

describe('PanoramixComponent', () => {
  let component: PanoramixComponent;
  let fixture: ComponentFixture<PanoramixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanoramixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanoramixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
