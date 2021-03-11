# Photo Gallery App

## A rework of https://github.com/iamshaunjp/firegram

* React + Firebase + Typescript

* Allows uploading images - Only PNG and JPEG allowed

* Uploaded files are stored in Firebase Storage
  
* Details about each file are stored in Cloud Firestore
  * createdAt
  * url (from Firebase Storage)
  * width
  * height
  * name

* Two display grid mode:
  * Grid - 3 items per row
  * Masonry - **heighten** or **widen** items based on **width** and **height**

* Clicking on an image modal will link to the direct link of the picture (new tab)

## Setting up

> yarn or npm install
>
> yarn start or npm start

### Create a .env file to store your firebase SDK info

|ENV NAME|VALUE|
|:--------|:-----|
|REACT_APP_API_KEY|apiKey
|REACT_APP_AUTH_DOMAIN|authDomain
|REACT_APP_PROJECT_ID|projectId
|REACT_APP_STORAGE_BUCKET|storageBucket
|REACT_APP_MESSAGING_SENDER_ID|messagingSenderId
|REACT_APP_APP_ID|appId
