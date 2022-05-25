export const getName = (screenName: string) => {
  switch (screenName) {
    case "Home":
      return "Connexion";
    case "SignUp":
      return "Inscription";
    case "Tasks":
      return "Tâches";
    default:
      return undefined;
  }
};
