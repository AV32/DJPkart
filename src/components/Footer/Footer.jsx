import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer mt-5">
      <div className="row">
        <div className="col-12 col-lg d-flex flex-column justify-content-between p-0 m-0">
          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <h5 className="card-title text-white">Experience</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#nothing">Adventure</a>
                </li>
                <li>
                  <a href="#nothing">Events</a>
                </li>
                <li>
                  <a href="#nothing">Festivals &amp; Fairs</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <h5 className="card-title text-white">Plan Your Trip</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#nothing">Tourism Circuits</a>
                </li>
                <li>
                  <a href="#nothing">Tourist Guide</a>
                </li>
                <li>
                  <a href="#nothing">Travel Agents</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg d-flex flex-column justify-content-between p-0 m-0">
          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <h5 className="card-title text-white">About UTDB</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#nothing">About Us</a>
                </li>

                <li>
                  <a href="#nothing">Contact Us</a>
                </li>
                <li>
                  <a href="#nothing">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <h5 className="card-title text-white">FAQ</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#nothing">Adventure Tourism Faq</a>
                </li>
                <li>
                  <a href="#nothing">Destinations Faq</a>
                </li>
                <li>
                  <a href="#nothing">Homestay Faq</a>
                </li>
                {/* <li>
                  <a href="#nothing">Travel Trade Faq</a>
                </li>
                <li>
                  <a href="#nothing">Place of Interest Faq</a>
                </li>
                <li>
                  <a href="#nothing">Religious Tourism Faq</a>
                </li>
                <li>
                  <a href="#nothing">Trekking Faq</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg d-flex flex-column justify-content-between p-0 m-0">
          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <h5 className="card-title text-white">Media</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#nothing">e-Books</a>
                </li>
                <li>
                  <a href="#nothing">Advertisements</a>
                </li>
                <li>
                  <a href="#nothing">Facilities</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <h5 className="card-title text-white">Trade</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#nothing">Invest In India Tourism</a>
                </li>
                <li>
                  <a href="#nothing">Homestay Registration</a>
                </li>
                <li>
                  <a href="#nothing">Travel Trade Registration</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg p-0 m-0">
          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <h5 className="card-title text-white">Departmental Info</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#nothing">CM Dashboard</a>
                </li>
                <li>
                  <a href="#nothing">Citizen Charter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col-lg-auto col-12 py-1">
          <p className="text-white m-0">
            Copyright © 2021 <span>DJP Team .</span> - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
