import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orderdeletemodal',
  templateUrl: './orderdeletemodal.component.html',
  styleUrls: ['./orderdeletemodal.component.css']
})
export class OrderdeletemodalComponent implements OnInit {

  order: any = {};

  constructor(public activeModal: NgbActiveModal, private orderService: OrderService) { }

  ngOnInit() { }

  deleteOrder() {
    this.activeModal.close(this.order);
  }

  cancelDelete() {
    this.activeModal.dismiss();
  }

}
