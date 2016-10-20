import PrismicHelper from './prismic';
import Prismic from "alw-react-native-prismic.io";

async function homepage () {
  try {
    const api = await PrismicHelper.getApi()
    const layoutDoc = await api.getSingle('home')
    const articles = await api.query(Prismic.Predicates.at("document.type", "article"))
    return {layoutDoc, articles}
  } catch(error) {
    console.log(error);
    return {};
  }
}

async function article (uid) {
  try {
    const api = await PrismicHelper.getApi()
    const layoutDoc = await api.getSingle('home')
    const articleDoc = await api.getByUID("article", uid)
    return {layoutDoc, articleDoc}
  } catch(error) {
    console.log(error);
    return {};
  }
}

//export {article}
export default {homepage, article}