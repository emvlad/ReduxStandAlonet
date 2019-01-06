import React from 'react';


import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail'

//main display of all components from all containers imported
 const App =()=>(

    <div>
        <h4> Username List:</h4>
        <UserList />
        <hr/>
        <h4> User Details:</h4>
        <UserDetail />

    </div>
);

//will export the main layout items-title to the DOM.
export default App;