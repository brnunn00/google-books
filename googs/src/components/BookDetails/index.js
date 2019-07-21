import React from "react";

function BookDetails(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.url} style={{ margin: "0 auto" }} />
      <h3>Author: {props.author}</h3>
      <p>Description: {props.desc}</p>
     
    </div>
  );
}

export default BookDetails;
