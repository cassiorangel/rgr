import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailComponent } from './modal-detail.component';
import { BsModalRef } from 'ngx-bootstrap/modal';

describe('ModalDetailComponent', () => {
  let component: ModalDetailComponent;
  let fixture: ComponentFixture<ModalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        BsModalRef
      ],
      declarations: [ ModalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
