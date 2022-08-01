let SERVER_DATA: SerializableValue = {};
let SERVER: unknown = null;

export const getServerData = () => SERVER_DATA;
export const appendServerData = (serverData: SerializableValue) =>
  (SERVER_DATA = { ...SERVER_DATA, ...serverData });

export const getServer = () => SERVER;
export const setServer = (server: unknown) => (SERVER = server);
