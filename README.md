# Spotify Ranking

This app allows a user to search for an artist on Spotify and see that artist's popularity ranking.

Spotify assigns a score to each artist from 0 to 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.

## How it works

The user enters an artist's name into the React form field. This form field is located in the Search view component, where the API request occurs. As the user is typing into the field, the updateSearch function is constantly watching for changes, while updating the state, and captures the user's input.

Once the user is done typing, they click the search button to run the search. This calls the submitSearch function and fires off our request.

Superagent is used to actually go out and make the request. It accesses the base url for the Spotify API and passes in a set of parameters that have been prespecified. In this case, the one variable that changes based on user input is the artist's name. Once Superagent receives a response from the body, the returned JSON is then parsed further to make sure we are properly accessing the artist's information.

Our Artist container is where we display the information that gets returned. In order to pass the artist's info back up into the Artist container, from the Search view, we use Redux to connect everything.

The store is our global state manager, which is essentially made up of smaller state managers, or reducers. In this case, there is an artistReducer. When a change occurs in the components, the change is sent to the reducer via the actions. The state is then updated in the reducer which is then read by the store. When those changes are processed by the store, all of the components rerender.

When a change happens in the Search view, the data is passed up to the Artist container and the container rerenders the changes.

## Technologies Used

React, Redux, Node, Express, Superagent, Babel, Webpack, Bluebird

## Services Used

Spotify API, Heroku, Github