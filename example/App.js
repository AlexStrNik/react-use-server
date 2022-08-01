import React from "react";
import { useServer } from "../lib/client";

export const App = () => {
  const { userAgent } = useServer((server) => {
    return {
      userAgent: server.getRequestHeader("user-agent"),
    };
  });

  return (
    <div>
      <p>User Agent: {userAgent}</p>
    </div>
  );
};
