import { action, makeObservable, observable } from "mobx";

class ThemeStore {
  isDark: boolean = localStorage.getItem("isDark")
    ? JSON.parse(localStorage.getItem("isDark") || "")
    : false;

  constructor() {
    makeObservable(this, {
      isDark: observable,
      toggleTheme: action,
    });
  }

  public toggleTheme = () => {
    this.isDark = !this.isDark;
    console.log({localStorage})
    localStorage.setItem("isDark", this.isDark.toString());
  }
}

const themeStore = new ThemeStore();

export default themeStore;
