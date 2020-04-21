import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { properties, query, dropdown } = this.args;

   if(query){
    properties = properties.filter(rental => rental.city.includes(query))
    }
    /*else if (dropdown) {
      properties = properties.filter(rental => rental.category.includes(dropdown));
    }*/

    return properties;
  }
}