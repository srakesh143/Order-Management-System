import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../order.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ordermodal',
  templateUrl: './ordermodal.component.html',
  styleUrls: ['./ordermodal.component.css']
})
export class OrdermodalComponent implements OnInit {
  ordersModal: any = {};

  constructor(private modalService: NgbModal, private orderService: OrderService, public activeModal: NgbActiveModal) { }
  ngOnInit() {
  }
  onSubmit(add: NgForm) {
    if (this.ordersModal) {
      this.orderService.updateOrder(this.ordersModal)
    }
    console.log(add);
    this.activeModal.close(add);
  }
}
