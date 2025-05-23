import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonjourComponent } from './bonjour.component';

describe('BonjourComponent', () => {
  let component: BonjourComponent;
  let fixture: ComponentFixture<BonjourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonjourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonjourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
