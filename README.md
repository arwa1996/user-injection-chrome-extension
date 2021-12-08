# user-injection-chrome-extension

This is a chrome extension that injects a random user information that comes from a users API, into any LinkedIn profile. Using react and typescript

## Running web app

```
yarn
```

Copy .env-template to .env file

```
yarn start
```

## Running chrome extension

```
yarn run build:extension
```

Go to chrome://extensions/

Select developer mode

Select load unpack

Select the generated build folder from the repo

Head to any linkedin profile

## Boilerplate

https://github.com/pixochi/create-react-chrome-extension-ts
