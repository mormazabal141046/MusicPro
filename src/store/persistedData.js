import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const SecureStorage = new SecureLS({ encodingType: "aes" });

const PersistedData = createPersistedState({
    paths:["labModules"],
    storage: {
      getItem: key => SecureStorage.get(key),
      setItem: (key, value) => SecureStorage.set(key, value),
      removeItem: key => SecureStorage.remove(key)
    }
  });

export default PersistedData;
