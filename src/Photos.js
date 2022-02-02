import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.pictures);
  if (props.pictures) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {props.pictures.map(function (picture, index) {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={picture.src.original}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={picture.src.landscape}
                      className="img-fluid"
                      alt={picture.src.photographer}
                    ></img>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
