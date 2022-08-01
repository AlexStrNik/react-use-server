# react-use-server

Yet another approach to implement server-side props

## Usage

```ts
// client-side
import React from "react";
import { useServer } from "react-use-server/client";

export const App = () => {
  const { userAgent } = useServer<ServerType>((server) => {
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

// server-side
import { renderToString } from "react-use-server/server";

let appHTML = renderToString(<App />, serverHelper);
```

## Example

```bash
> npm run build && npm run example
```

## Why hooks?

Hooks can be easily combined in each other, so you may write like this

```ts
const useCommonProps = () =>
  useServer((server) => {
    return {
      lang: server.getLang() || "en",
      tld: server.getTld() || ".com",
    };
  });

const SomeComponent = () => {
  const { lang } = useCommonProps();
  // component specific data
  const { ... } = useServer(...)

  return <div>...</div>
}
```

Also hooks allows to get data right in place where it use, so refactoring becomes a much easier

## Limitations

Currently all data returned from `useServer` merges in one object, so you cannot have different value for one key. However there is no memoization so result overwrites each time you call hook (on server). Also there is no way to strip code from client bundle
