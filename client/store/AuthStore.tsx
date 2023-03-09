import { makeObservable, observable, action, computed } from "mobx";

interface IUser {
  id: string;
  name: string;
}
class AuthStore {
  user: IUser | null = null;

  constructor() {
    makeObservable(this,{
      // user: observable,
      // user: observable,
      isAuth: computed,
      currentUser: computed,
      setUser: action,
      clearUser: action

    });
  }

  public setUser(user: IUser) {
    this.user = user;
  }

  public clearUser() {
    this.user = null;
  }

  public get isAuth() {
    return !!this.user;
  }

  public get currentUser() {
    return this.user;
  }

 
}

const authStore = new AuthStore();

export default authStore;
