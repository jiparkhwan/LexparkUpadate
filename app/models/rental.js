import Model, { attr } from '@ember-data/model';

export default class RentalModel extends Model {
  @attr title;
  @attr owner;
  @attr city;
  @attr state;
  @attr country;
  @attr coordinates;
  @attr type;
  @attr image;
  @attr bedrooms;
  @attr bathrooms;
  @attr kitchen;
  @attr wifi;
  @attr price;
  @attr description;
}