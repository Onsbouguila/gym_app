import React from "react";
import pricing from "../../assets/pricing.png";
import "./Pricing.css";
import iconPricing from "../../assets/iconPricing.png";
import PricingCard from "./PricingCard";
import img2 from "../../assets/pricing-img2.png";
import Button from "../../CommunComponents/Button";
function index() {
  const pricingList = [
    {
      backgroundColor: "rgba(255, 255, 255, 0.14)",
      color: "#00CFC3",
      title: "Silver pack",
      price: "30.00",
      btnColor: "#616161",
      items: ["Unlimited Equipments", "Free Riding", "Personal Trainer"],
    },
    {
      backgroundColor: "#00BEB3",
      color: "#00CFC3",
      title: "Premium pack",
      price: "80.00",
      btnColor: "white",
      premium: true,
      items: [
        "Free Riding",
        "Unlimited Equipments",
        "Personal Trainer",
        "Weight Losing Classes",
        "Free Riding",
      ],
    },
    {
      backgroundColor: "rgba(255, 255, 255, 0.14)",
      color: "#00CFC3",
      title: "Gold pack",
      price: "50.00",
      btnColor: "#616161",
      items: ["Unlimited Equipments", "Free Riding", "Personal Trainer"],
    },
  ];
  return (
    <div>
      <div>
        <img src={pricing} alt="pricing" className="img-header-pricing" />
        <div className="pricing-card-content">
          <h4 className="fw-bolder text-white text-center">Cheap your body</h4>
          <h1 className="fw-bolder text-white text-center pricing-title">
            OUR <span className="pricing-span">PRICING </span>
          </h1>
          <div className="pricing-horizontal-ligne"> </div>
        </div>
        <div className="pricing-img-card img-fluid d-none d-md-block mb-5">
          <img src={iconPricing} alt="icon" />
        </div>
        <br />
        <br />
      </div>
      <div className="text-white fw-bolder text-center mt-5">
        <p className="pricing-text1">WHY CHOOSE US?</p>
        <div className="pricing-horizotal-ligne2 mx-auto"></div>
        <p className="pricing-text2">REGISTRATION NOW TO GET MORE DEALS</p>
      </div>
      {/* Pricing cards */}
      <div className="d-md-flex justify-content-center gap-3 mb-5 mx-3 mx-md-0">
        {pricingList?.map((item, index) => {
          return <PricingCard data={item} />;
        })}
      </div>
      {/* Pricing card  3  */}
      <div className="pricing-header-card my-5 justify-content-center d-flex align-items-center">
        <img src={img2} alt="img" className="d-block mx-auto img-fluid" />
        <div className="pricing-card-content">
          <p className="pricing-text2 text-center text-white fw-bolder">
            REGISTRATION NOW TO GET MORE DEALS
          </p>
          <p className="pricing-text1 text-center text-white">
            WHERE HEALTH, BEAUTY AND FITNESS MEET.
          </p>
          <div className="text-center">
            <Button
              label="Get appointement"
              color="white"
              backgroundColor="#00ffee56"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
