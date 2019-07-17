import React from "react";

export default function ImageDiv({image}) {
  return (
    <div className="image">
      <img src= {image} style={{ maxWidth: "400px" }} />
    </div>
  );
}
