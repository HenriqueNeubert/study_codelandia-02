import React from "react";
import Product from "./Product"

export default (props) => {

  const styleAline = {
    justifyContent: props.alignX || 'center',
  }

  return (
    <section className="pb-2">
      <div className="container">
        <div className="d-flex row row-cols-sm-4 row-cols-2 wrap" style={styleAline}>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    </section>
  );
};
