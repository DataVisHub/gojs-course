class Theme {
  private static _instance: Theme;
  private _variables: CSSStyleDeclaration;

  constructor() {
    this._variables = getComputedStyle(document.documentElement);
  }

  static getInstance(): Theme {
    if (!Theme._instance) {
      Theme._instance = new Theme();
    }
    return Theme._instance;
  }

  getValue = (cssVariableName: string) =>
    this._variables.getPropertyValue(cssVariableName).trim();
}

export const theme = Theme.getInstance();

export enum CssVariable {
  Gray200 = "--gray-200",
  Gray300 = "--gray-300",
  Gray400 = "--gray-400",
  Gray500 = "--gray-500",
  Gray600 = "--gray-600",
  Gray700 = "--gray-700",
  Gray800 = "--gray-800",
  Gray900 = "--gray-900",
  Purple500 = "--purple-500",
  Shadow = "--shadow",
}
