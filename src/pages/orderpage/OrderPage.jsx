import React, { useState } from "react";
import "./OrderPage.css";
import data from "../../products";
import OrderCard from "../../ordercard/OrderCard";
import { getOrders, addOrderItem } from "../cart/useLocalStorage";

function OrderPage() {
  const getDeliveryDate = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let d = new Date().getDate();
    let m = new Date().getMonth();
    let a =
      d > 0
        ? ["th", "st", "nd", "rd"][(d > 3 && d < 21) || d % 10 > 3 ? 0 : d % 10]
        : "";
    console.log(d);
    console.log(m);
    return d + a + " " + monthNames[m];
  };

  console.log(getDeliveryDate());

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
              date={getDeliveryDate()}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default OrderPage;
