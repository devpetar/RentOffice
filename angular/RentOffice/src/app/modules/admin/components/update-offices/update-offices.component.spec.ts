import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOfficesComponent } from './update-offices.component';

describe('UpdateOfficesComponent', () => {
  let component: UpdateOfficesComponent;
  let fixture: ComponentFixture<UpdateOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateOfficesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
