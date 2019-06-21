import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdermodalComponent } from './ordermodal/ordermodal.component';
import { OrderdeletemodalComponent } from './orderdeletemodal/orderdeletemodal.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any = [];
  addedOrder: any;

  constructor(private orderService: OrderService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getOrders();
  }

  open() {
    const modalRef = this.modalService.open(OrdermodalComponent);
    modalRef.componentInstance.ordersModal = this.orders;
    modalRef.result.then((result) => {
      if (result) {
        this.orderService.addOrder(result).subscribe((data) => {
          this.orders.push(data);
        });
      }
    });
  }

  getOrders() {
    this.orderService.getOrders().subscribe((data) => { this.orders = data });
  }

  update(data) {
    console.log(data);
    const modalRef = this.modalService.open(OrdermodalComponent);
    modalRef.componentInstance.ordersModal = data;
  }

  deleteOrder(order) {
    const modalRef = this.modalService.open(OrderdeletemodalComponent);
    modalRef.componentInstance.order = order;
    modalRef.result.then((result) => {
      if (result) {
        this.orderService.deleteOrder(result).subscribe((data) => {
          for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i]['id'] === data['id']) {
              this.orders.splice(i, 1);
              i--;
            }
          }
        });
      }
    });
  }
}
