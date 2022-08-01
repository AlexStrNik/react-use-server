type SerializableValue = { [k: string]: string | number | boolean | undefined };
type ServerFN<T, V extends SerializableValue> = (server: T) => V;
