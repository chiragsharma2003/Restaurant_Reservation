import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Delicious Food, where great food meets warm hospitality. We are passionate about serving delicious, freshly prepared meals made from high-quality ingredients and authentic recipes.
              Our chefs put their heart into every dish, blending traditional flavors with a modern touch to give you a memorable dining experience. Whether you’re here for a quick bite, a family meal, or a special celebration, we aim to make every visit special.
              At Delicious Food, we believe food is more than just a meal — it’s a way to bring people together. From our kitchen to your table, we promise great taste, hygiene, and service you can trust.
              Come hungry, leave happy. ❤️
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
