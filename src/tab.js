import React, { useState, useEffect } from "react";
import "./styles.css";

const Tab = () => {
  const [users, setusers] = useState([]);
  const [products, setproducts] = useState([]);
  const [orders, setorders] = useState([]);

  const getData = async () => {
    const response1 = await fetch("https://assessment.api.vweb.app/users");
    setusers(await response1.json());
    const response2 = await fetch("https://assessment.api.vweb.app/products");
    setproducts(await response2.json());
    const response3 = await fetch("https://assessment.api.vweb.app/orders");
    setorders(await response3.json());
  };

  useEffect(() => {
    getData();
  }, []);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Customers
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Products
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Orders
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {users.map((ele) => (
            <div>
              <h2>{ele.name}</h2>

              <p>Customer ID - {ele.user_id}</p>
              <hr />
            </div>
          ))}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div>
            {products.map((row) => (
              <div
                class="card"
                style={{ width: "18rem", display: "inline-block" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{row.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {row.selling_price}
                  </h6>
                  <p class="card-text">Stock remaining ({row.stock})</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div>
            {orders.map((ele) => (
              <div
                class="card"
                style={{ width: "12rem", display: "inline-block" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Order ID - {ele.order_id}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Order Date - <br />
                    {ele.order_date}
                  </h6>
                  <p>
                    Product ID - {ele.product_id}
                    <br />
                    Quantity - {ele.quantity}
                    <br />
                    User ID - {ele.user_id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
