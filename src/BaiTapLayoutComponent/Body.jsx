import React from "react";
import Welcome from "./bodyComponents/Welcome";
import Card from "./bodyComponents/Card";

const Body = () => {
  const items = [
    {
      icon: "bi-collection",
      title: "Fresh new layout",
      desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      icon: "bi-cloud-download",
      title: "Free to download",
      desc: "As always, Start Bootstrap has a powerful collectin of free templates.",
    },
    {
      icon: "bi-card-heading",
      title: "Jumbotron hero header",
      desc: "The heroic part of this template is the jumbotron hero header!",
    },
    {
      iicon: "bi-bootstrap",
      title: "Feature boxes",
      desc: "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
      icon: "bi-code",
      title: "Simple clean code",
      desc: "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      icon: "bi-patch-check",
      title: "A name you trust",
      desc: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];

  return (
    <div className="container">
      <div className="py-5">
        <Welcome />
      </div>
      <div className="row gx-lg-5 pt-4">
        {items.map((item, index) => {
          return (
            <div key={index} className="col-lg-6 col-xxl-4 mb-5">
              <Card icon={item.icon} title={item.title} desc={item.desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
