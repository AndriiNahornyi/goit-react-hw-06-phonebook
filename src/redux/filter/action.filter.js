import { filterContact } from '../filter/types.filter';
export const filterContactAction = payload => ({
  type: filterContact,
  payload,
});
