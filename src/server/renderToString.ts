import { ReactElement } from "react";
import { renderToString as _renderToString } from "react-dom/server";
import { getServerData, setServer } from "../registry";

export const renderToString = <T>(app: ReactElement, server: T): string => {
  setServer(server);

  const renderedApp = _renderToString(app);
  const serverData = `<script>window.__SERVER_DATA__ = ${JSON.stringify(
    getServerData()
  )}</script>`;

  return serverData + renderedApp;
};
