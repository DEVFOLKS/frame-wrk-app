import storage from "redux-persist/lib/storage";

export const PersistConfig = {
  key: "root",
  storage: storage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: ["startup"],
};
