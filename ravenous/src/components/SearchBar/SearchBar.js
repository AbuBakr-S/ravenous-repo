import React from 'react';
import './SearchBar.css';

/*
  The search bar will communicate with the Yelp API, but you’ll build the
  functionality to communicate with the API in a later project. Today, you’ll
  build part of the structure that’s needed to communicate with the Yelp API.
  Specifically, requests to the Yelp API must follow formatting and naming
  conventions set by the API. For example, the search bar should allow users to
  search businesses by:

  Best Match
  Highest Rated
  Most Reviewed
*/

// Parameter: sort-by, Type: String, Value: (Modes used in Yelp Search Algorithm)
const sortByOptions = {
  'Best Match' : 'best_match',
  'Highest Rated' : 'rating',
  'Most Reviewed' : 'review_count'
}

class SearchBar extends React.Component {
  /*
    renderSortByOptions() will dynamically create the list items needed to
    display the sort options (Best Match, Highest Rated, Most Reviewed). This
    is to help future proof against potential changes to the Yelp API.

    Need to iterate through the object by accessing the keys in sortByOptions.
  */
  renderSortByOptions() {
    // Call the keys() method on the JavaScript Object library and pass in sortByOptions.
    // Iterate through with map().
    // Pass a callback function to the map() method as an argument. The callback function should have one parameter called sortByOption.
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];  // Access the sortByOptions values using the sortByOption parameter of the callback function.
      <li key={sortByOptionValue}>{sortByOption}</li>
    });
  }

  render() {
    return (
      <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {
            //Use .renderSortByOptions() to sort the businesses by their options
            .renderSortByOptions();
          }
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a>Let's Go</a>
      </div>
    </div>
    );
  }

}
