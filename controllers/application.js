import configuration from '../conf/prismic-configuration';
import Prismic from "alw-react-native-prismic.io";

function linkResolver (doc, ctx) {
}

function ctx() {
  return { 
    endpoint: configuration.apiEndpoint,
    linkResolver: this.linkResolver
  };
}

function getApi () {
  return Prismic.api(configuration.apiEndpoint, {
    accessToken: configuration.accessToken
  })
}
  
function homepage () {
  return getApi()
  .then((api) => {
    return api.getSingle('home')
  })
  .catch((err) => {
    return err;
  })
}

export default {ctx, getApi, homepage};