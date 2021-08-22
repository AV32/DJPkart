import React, { useState } from "react";
import "./OrderPage.css";
import data from "../../products";
import OrderCard from "../../ordercard/OrderCard";
import { getOrders, addOrderItem } from "../cart/useLocalStorage";

function OrderPage() {
  const orders = getOrders();

  return (
    <div className="orders__container">
      {!orders || (orders && orders.length === 0) ? (
        <h1>No orders</h1>
      ) : (
        <>
          {orders?.map((item) => (
            <OrderCard
              name={item?.name}
              price={item?.price}
              img={item?.img}
              date={item.date}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default OrderPage;
