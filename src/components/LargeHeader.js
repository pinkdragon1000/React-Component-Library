import React from "react";
import Style from "style-it";

const LargeHeader = (props) => {
  const styles = `
    .background {
      background: var(--sample-gradient);
    }
    .common-bg {
      align-items: center;
      border-radius: 0rem 0rem 2rem 2rem;
      justify-content: center;
      padding: 6rem;
    }
    .app-main-title {
      color: var(--app-white);
      font-family: 'Courgette', cursive;
      font-size: 4rem;
      text-shadow: 0rem 0.125rem rgb(0 0 0 / 16%);
      font-weight: 300;
    }
    .app-tag-line {
      color: var(--app-white);
    }
    img {
      padding-right: 1rem;
      width: 9.813rem;
      height: 5.188rem;
    }
    `;
  return Style.it(
    `${styles}`,
    <div
      className={
        props.className
          ? "row common-bg " + props.className
          : "row common-bg background"
      }
    >
      <div className="column center">
        <div className="row">
          {props.imgSrc ? (
            <img alt="" className="logo" rel="icon" src={props.imgSrc} />
          ) : (
            ""
          )}

          <h1 className="app-main-title">{props.mainTitle}</h1>
        </div>
        <p className="app-tag-line">{props.tagline}</p>
      </div>
    </div>
  );
};

export default LargeHeader;
