import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get("http://localhost:3000/orders");
  }

  addOrder(order) {
    return this.http.post("http://localhost:3000/orders/", order);
  }

  updateOrder(order) {
    this.http.put("http://localhost:3000/orders/" + order.id, order).subscribe((data) => { console.log(data); });
  }

  deleteOrder(order) {
    return this.http.delete("http://localhost:3000/orders/" + order.id)
  }
}
