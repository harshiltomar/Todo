import React, { useState } from "react";
import "./Profile.css";
import { MdEdit } from "react-icons/md";
import axios from "axios";

const Profile = () => {
  return (
    <section className="vh-100 section">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-md-9 col-lg-7 col-xl-5">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2566/2566166.png"
                      alt="Generic placeholder image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex">
                      <h5 className="mb-1 mr-4">Harshil Tomar</h5>
                      <MdEdit />
                    </div>
                    <p className="mb-2 pb-1 work">Software Engineer</p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2 div2">
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <button
                        type="button"
                        className="btn btn-outline-primary mr-2"
                      >
                        Male
                      </button>
                      <button type="button" className="btn btn-primary ml-2">
                        Age: 22
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
