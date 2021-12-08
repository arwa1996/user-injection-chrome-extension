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

## Created Files

public\extension-manifest.json

src\components\UserProfile.tsx

src\models\user.ts

src\models\usersData.ts

src\services\restful-service.ts

src\App.scss

src\App.tsx

src\config.ts

.env-template

## Added dependencies

react-icons

cross-env

sass

## Boilerplate

https://github.com/pixochi/create-react-chrome-extension-ts
