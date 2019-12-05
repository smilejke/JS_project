import renderLogin from '../views/login.js';
import { storage, clearStorage } from '../localStorage.js';

export default (context) => {
  renderLogin(context);
};
