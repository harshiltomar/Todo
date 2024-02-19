import React, { useEffect, useState } from "react";
import "./Payment.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Payment = ({setPricing}) => {

  const {price} = useParams();
  
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const [email, setEmail] = useState("");

  const sendEmail = async () => {
    try {
      await axios.post("http://localhost:3000/sendemail", { email });
      toast.success("An Email has been sent to You !");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email.Please try again");
    }
  };

  return (
    <div class="mr-4 container d-flex">
      <ToastContainer />
      <div class="box-1 bg-light user">
        <div class="d-flex align-items-center mb-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2566/2566166.png"
            class="pic rounded-circle"
            alt=""
          />
          <p class="ml-1 ps-2 name">Harshil Tomar</p>
        </div>
        <div class="box-inner-1 pb-3 mb-3 ">
          <div class="d-flex justify-content-between mb-3 userdetails">
            <p class="fw-bold">TODOist Subscription</p>
            <p class="fw-lighter">
              <span style={{ color: "red" }} class="fas fa-dollar-sign"></span>
              {price}.00+
            </p>
          </div>
          <div
            id="my"
            class="carousel slide carousel-fade img-details"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div class="carousel-inner">
              <div
                class={
                  activeIndex === 0 ? "carousel-item active" : "carousel-item"
                }
              >
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-business-planning_52683-76248.jpg?size=626&ext=jpg&ga=GA1.1.51789250.1707655726&semt=sph"
                  class="d-block w-100"
                  alt="Slide 1"
                />
              </div>
              <div
                class={
                  activeIndex === 1 ? "carousel-item active" : "carousel-item"
                }
              >
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150292643.jpg?size=626&ext=jpg&ga=GA1.1.51789250.1707655726&semt=sph"
                  class="d-block w-100 h-100"
                  alt="Slide 2"
                />
              </div>
              <div
                class={
                  activeIndex === 2 ? "carousel-item active" : "carousel-item"
                }
              >
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150292646.jpg?w=740&t=st=1708254914~exp=1708255514~hmac=8c3e44990883906b4e57ffb585106cb934b64009902cb77dbebf392f04114cd0"
                  class="d-block w-100"
                  alt="Slide 3"
                />
              </div>
            </div>
            <button
              onClick={prevSlide}
              class="carousel-control-prev"
              type="button"
              data-bs-target="#my"
              data-bs-slide="prev"
            >
              <div class="icon" style={{ backgroundColor: "red" }}>
                <span
                  class="fas fa-arrow-left"
                  style={{ color: "white" }}
                ></span>
              </div>
            </button>

            <button
              onClick={nextSlide}
              class="carousel-control-next"
              type="button"
              data-bs-target="#my"
              data-bs-slide="next"
            >
              <div class="icon" style={{ backgroundColor: "red" }}>
                <span
                  class="fas fa-arrow-right"
                  style={{ color: "white" }}
                ></span>
              </div>
            </button>
          </div>
          <p class="dis info my-3">Get Started on Your Goal Journey Today !</p>
        </div>
      </div>
      <div class="box-2">
        <div class="box-inner-2">
          <div>
            <p class="fw-bold">Payment Details</p>
            <p class="dis mb-3">
              Complete your purchase by providing your payment details
            </p>
          </div>
          <form action="">
            <div class="mb-3">
              <p class="dis fw-bold mb-2">Email address</p>
              <input
                class="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </div>
            <div>
              <p class="dis fw-bold mb-2">Card details</p>
              <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                <div class="fab fa-cc-visa ps-3 ml-2"></div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Card Details"
                />
                <div class="d-flex w-50">
                  <input
                    type="text"
                    class="form-control px-0"
                    placeholder="MM/YY"
                  />
                  <input
                    type="password"
                    class="form-control px-0"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <div class="my-3 cardname">
                <p class="dis fw-bold mb-2">Cardholder name</p>
                <input class="form-control" type="text" />
              </div>
              <div class="address">
                <p class="dis fw-bold mb-3">Billing address</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected hidden>
                    United States
                  </option>
                  <option value="1">India</option>
                  <option value="2">Australia</option>
                  <option value="3">Canada</option>
                </select>
                <div class="d-flex">
                  <input
                    class="form-control zip"
                    type="text"
                    placeholder="ZIP"
                  />
                  <input
                    class="form-control state"
                    type="text"
                    placeholder="State"
                  />
                </div>
                <div class=" my-3">
                  <p class="dis fw-bold mb-2">VAT Number</p>
                  <div class="inputWithcheck">
                    <input
                      class="form-control"
                      type="text"
                      value="GB012345B9"
                    />
                    <span class="fas fa-check"></span>
                  </div>
                </div>
                <div class="d-flex flex-column dis">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <p>Subtotal</p>
                    <p>
                      <span class="fas fa-dollar-sign"></span>
                      {price}.00
                    </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <p>
                      VAT<span>(20%)</span>
                    </p>
                    <p>
                      <span class="fas fa-dollar-sign"></span>{Number(price)*0.2}.00
                    </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <p class="fw-bold">Total</p>
                    <p class="fw-bold">
                      <span class="fas fa-dollar-sign"></span>{Number(price)*1.2}.00
                    </p>
                  </div>
                  <div class="btn btn-primary mt-2" onClick={sendEmail}>
                    Check Out
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
