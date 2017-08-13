import axios from "axios";
const Hello = {
  home: "Home",
  about: {
    title: "About"
  },
  contact: "Contact Us",
  articles: "Articles"
}
const Bonjour = {
  home: "Home",
  about: {
    title: "A propos"
  },
  contact: "Contactez Nous",
  articles: "Articles"
}

export function getLg(lang) {
  console.log('=============');
  console.log(lang);
  console.log('=============');
  if (lang === 'EN') {
    return function(dispatch) {
      dispatch({type: "GETENGLISH",
                payload: Hello});
    }
  } else {
    return function(dispatch) {
      dispatch({type: "GETFRENCH",
                payload: Bonjour});
    }
  }

}
