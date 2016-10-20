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

function getApi() {
  return Prismic.api(configuration.apiEndpoint, {
    accessToken: configuration.accessToken
  })
}

export default {ctx, getApi}
