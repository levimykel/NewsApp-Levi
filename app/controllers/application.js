import PrismicHelper from './prismic';
import Prismic from "alw-react-native-prismic.io";

async function homepage () {
  try {
    const api = await PrismicHelper.getApi()
    const homeDoc = await api.getSingle('home')
    const articles = await api.query(Prismic.Predicates.at("document.type", "article"))
    return {homeDoc, articles}
  } catch(error) {
    console.log(error);
    return {};
  }
}

function article (uid) {
  return PrismicHelper.getApi()
  .then((api) => {
    return api.getByUID("article", uid)
  })
  .catch((err) => {
    return err;
  })
}

//export {article}
export default {homepage, article}