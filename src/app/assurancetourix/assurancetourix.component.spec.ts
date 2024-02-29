import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssurancetourixComponent } from './assurancetourix.component';

describe('AssurancetourixComponent', () => {
  let component: AssurancetourixComponent;
  let fixture: ComponentFixture<AssurancetourixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssurancetourixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssurancetourixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
