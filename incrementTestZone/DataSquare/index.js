import React from "react";

import DataList from "./DataList";
import DataDetails from "./DataDetails";

//main display of all components from all containers imported
//placeholder for user-list and user-details imported
const Datas = () => (
  <div>
    <h4> Data Listing</h4>
    <DataList />
    <hr />
    <h4> Data Details:</h4>
    <DataDetails />
  </div>
);

//will export the main layout items-title to the DOM.
export default Datas;
