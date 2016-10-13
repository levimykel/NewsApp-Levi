import Prismic from './prismic';

function homepage () {
  return Prismic.getApi()
  .then((api) => {
    return api.getSingle('home')
  })
  .catch((err) => {
    return err;
  })
}

export default {homepage}
