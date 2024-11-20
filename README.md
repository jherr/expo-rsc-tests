Apologies for the terrible names.

- The `test-app` app launchs and it appears to call the server function. But it doesn't appear that the function is actually running on the server at all. I don't see any server side environment variables, `fs` and `sqlite` don't work. So it's probably just running the function on the client.

- `test2` is an app built on the walkthrough at the top of [the RSC tutorial](https://docs.expo.dev/guides/server-components/#rendering-in-server-functions). I needed to set `output` to `single` and it still doesn't copile because the bundler is unable to resolve `react-server-dom-webpack/client`.
