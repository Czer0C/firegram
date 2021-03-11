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
