import { appendServerData, getServer } from "../registry";

interface Window {
  __SERVER_DATA__?: SerializableValue;
}

export let useServer = <T, V extends SerializableValue>(
  _serverFn: ServerFN<T, V>
): V => {
  return (window as Window).__SERVER_DATA__ as V;
};

if (typeof document === "undefined") {
  useServer = <T, V extends SerializableValue>(serverFn: ServerFN<T, V>) => {
    const data = serverFn(getServer() as T);

    appendServerData(data);

    return data;
  };
}
