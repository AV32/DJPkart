import React from "react";
import {useState} from 'react'
import "./subCat.css";

function SubCat(props) {

    const [vsib, setVsib] = useState(false)


    const handleClick = (e) => {
        e.preventDefault()
        // setVsib("True")
        // eslint-disable-next-line no-lone-blocks
        {vsib ? setVsib(false) : setVsib(true)}
        // onMouseEnter={() => setVsib(true)}
        // onMouseLeave={() => setVsib(false)}
    }
  return (
    <div>
      <div className="cat">
        <h3 onClick={handleClick}>
          {props.category}
        </h3>
        {vsib && (
          <div className="sub_cat">
            <li>{props.subcategory1}</li>
            <li>{props.subcategory2}</li>
            <li>{props.subcategory3}</li>
          </div>
        )}
      </div>
    </div> 
  );
}

export default SubCat;
