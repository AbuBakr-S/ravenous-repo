import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

/*
The point of the <BusinessList /> component is to simulate what a returned list of
businesses would look like in Ravenous (after querying the Yelp API, for example).
*/

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}

// This list component will need to be rendered again by another component, so you’ll need to export it.
export default BusinessList;
