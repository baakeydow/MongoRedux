import axios from "axios";
const Hello = {
  home: {
    title: "Welcome"
  },
  articles: {
    title: "Articles"
  },
  about: {
    title: "About"
  },
  contact: {
    title: "Contact Us"
  }
}
const Bonjour = {
  home: {
    title: "Salut !"
  },
  articles: {
    title: "Nos Articles"
  },
  about: {
    title: "A Propos"
  },
  contact: {
    title: "Contactez Nous"
  }
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
