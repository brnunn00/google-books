import React from "react";
import SaveBtn from "../SaveBtn"
function BookCard(props) {
  return (
    
    <div class="card">
      <div className="card-body">{props.children}</div>
     
       </div>
  );
}

export default BookCard;
