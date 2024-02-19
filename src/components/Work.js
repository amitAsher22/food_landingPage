import React, { useState } from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: " is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often ",
      text: " is a long established fact . ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: " is a long established fact that a reader will be distracted by the  ",
    },
  ];

  return (
    <div className="word-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-subheading">How It Works</h1>
        <p className="primary-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>

      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="dataimg" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
