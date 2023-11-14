import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PararentDataComponent } from './pararent-data.component';

describe('PararentDataComponent', () => {
  let component: PararentDataComponent;
  let fixture: ComponentFixture<PararentDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PararentDataComponent]
    });
    fixture = TestBed.createComponent(PararentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
