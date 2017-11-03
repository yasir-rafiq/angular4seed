export class LocalStorageService {
  setStorage(data:  string) {
    if (typeof(Storage) !== 'undefined') {
      // Code for localStorage/sessionStorage.
      localStorage.setItem('token', data);
    } else {
      // Sorry! No Web Storage support..
      return confirm('Your localStorage is not available!');
    }
  }
  getStorage() {
      return localStorage.getItem('token');
  }
  clearStorage() {
    localStorage.clear();
  }
}
