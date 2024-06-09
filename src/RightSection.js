import React from "react";
import logo1 from "./assets/2/logo1.png";
import logo2 from "./assets/3/logo2.png";
import logo3 from "./assets/4/logo3.png";
import logo4 from "./assets/5/logo4.png";
import logo5 from "./assets/6/logo5.png";
import logo6 from "./assets/7/logo6.png";

function RightSection() {
  const boxContents = [
    {
      logo: logo1,
      heading: `Presentation Design`,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
    },
    {
      logo: logo2,
      heading: "Audio-Video Production",
      paragraph:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      logo: logo3,
      heading: "Translation Services",
      paragraph:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },
    {
      logo: logo4,
      heading: "Graphic Design",
      paragraph:
        "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      logo: logo5,
      heading: "Research & Analytics",
      paragraph:
        "Sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.",
    },
    {
      logo: logo6,
      heading: "Data Processing",
      paragraph:
        "Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    },
  ];

  return (
    <div className="right-content">
      {boxContents.map((content, index) => (
        <div className="box" key={index}>
          <div className="divLog">
            <img
              src={content.logo}
              alt={`Logo ${index + 1}`}
              className="box-logo"
            />
            <div className="box-heading">{content.heading}</div>
          </div>
          <p className="box-paragraph">{content.paragraph}</p>
        </div>
      ))}
    </div>
  );
}

export default RightSection;
