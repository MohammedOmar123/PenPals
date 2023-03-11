import { useGetUser } from "@/hooks/auth.hook";
import { IUser } from "@/interfaces/other/IUser";
import { makeObservable, observable, action, computed } from "mobx";

class AuthStore {
  user: IUser | null = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      isAuth: computed,
      setUser: action,
      clearUser: action,
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
}

const authStore = new AuthStore();

export default authStore;
