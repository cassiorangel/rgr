import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})
export class ModalDetailComponent implements OnInit {

  @Input() name: string;
  @Input() closeBtnName: string;

  lat = 28.704060;
  long = 77.102493;
  googleMapType = 'satellite';

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }
  onClose() {
    this.bsModalRef.hide()
  }

}
