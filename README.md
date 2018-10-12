# AssignmentEluciData

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

#Follow the following process to run the app

1: clone using git
2: npm install
3: ng serve --open

#Architecture

1: Root component has HeaderComponent and MainComponent as child components.
2: Header is static for just showing.
3: Main component is the one which handles core functionality.

It has 3 child components: OfferingsComponent, SubOfferingsComponent, SingleOfferingsComponent.

Main component has job of fetching the mock data from service and procviding it to child components.

Child Components renders the data throuh input binding and notifies
main component about click event through output bindings

4: Bootstrap has been used for styling and minimal custom styling has been done due to time constraints.

There are other possible imrovements which could be done if more time would have given



