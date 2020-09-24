# HTR using Vision API & nodeJS

## Pre-requesits

### Set up a Cloud Console project

1. Create or select a project.
2. Enable the Vision API for that project.
3. Create a service account.
4. Download a private key as JSON.
5. Set the environment variable GOOGLE_APPLICATION_CREDENTIALS to the path of the JSON file.

```
## Linux or MacOS
export GOOGLE_APPLICATION_CREDENTIALS="[your-path]/my-key.json"

## Windows
set GOOGLE_APPLICATION_CREDENTIALS="[your path]\my-key.json"
```

## Project Setup

1. Clone repo
2. Install dependencies

```
yarn install
```

3. Run project

```
yarn start
```
