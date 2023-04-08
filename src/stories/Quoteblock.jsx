import React from "react";
import PropTypes from "prop-types";
import "./quoteblock.css";

export const Quoteblock = ({
  title,
  subTitle,
  variant,
  hideUnderline,
  compBackground,
  ctaLinks,
  description,
  textboxBackground
}) => {
  const containerBg = {
    backgroundColor: compBackground,
  };
  const textBg={
    backgroundColor:textboxBackground
  }

  const buttonClass =
    variant === "brandA"
      ? "buttons buttons-brand-a"
      : "buttons buttons-brand-b";
  const containerClass = variant === "brandA" ? "fonts-a" : "fonts-b";
  return (
    <div className={`container ${containerClass}`} style={containerBg}>
      <div className="title" style={textBg}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        {!hideUnderline && <hr />}
      </div>
      <div className="description" style={textBg}>
        <p>
         {description}
        </p>
        <div className={buttonClass}>
          {ctaLinks.map((item, id) => {
            return <button key={id}>{item.text}</button>;
          })}
        </div>
      </div>
    </div>
  );
};

Quoteblock.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  brand: PropTypes.bool,
  hideUnderline: PropTypes.bool,
  description:PropTypes.string.isRequired,
  compBackground:PropTypes.string,
  textboxBackground:PropTypes.string,
  onClick: PropTypes.func,
};

// Quoteblock.defaultProps = {
//   title:"",
//   subTitle:"",
//   variant :"",
//   hideUnderline:false,
//   size: "medium",
//   onClick: undefined,
// };
