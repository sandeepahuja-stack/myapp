# Stories


A Stories project using 
    NY api for articles and search
    Fake REST API  for login and register





## Install

```bash
$ npm install
$ npm  start
```

## Test & Coverage
``` bash
$ npm test -- --coverage

    <Absolute Path>/coverage/lcov-report/index.html
```

## Home Page
    Home page consist of articles and you can filter the article as well
    We have three tabs available or page (All, World, Science )

## How to login/register?


``` 
 For login / register backend services clone this
 https://github.com/techiediaries/fake-api-jwt-json-server
```


User can login/register by filling a form 

```
    url : http://localhost:3000/login

```
with the following data 

```

  "email": "nilson@email.com",
  "password":"nilson"

```

## API Used to get comments 
```
    https://jsonplaceholder.typicode.com/posts/1/comments
```

## HOMEPAGE
<img width="477" alt="Screenshot 2022-08-21 at 12 24 28 AM" src="https://user-images.githubusercontent.com/62178420/185762234-7aec9f7f-1e09-412a-8108-8723abc69efc.png">

## When user click on article
<img width="480" alt="Screenshot 2022-08-21 at 12 24 43 AM" src="https://user-images.githubusercontent.com/62178420/185762232-444197b0-c2ec-4dbe-bb38-af2ea3271e24.png">
<img width="504" alt="Screenshot 2022-08-21 at 12 24 48 AM" src="https://user-images.githubusercontent.com/62178420/185762224-7b4a3f75-37e4-4e8e-97de-028d8bb558cc.png">

## when user click on search button and we show previous 5 searches stored in cookie
<img width="468" alt="Screenshot 2022-08-21 at 1 05 56 AM" src="https://user-images.githubusercontent.com/62178420/185763535-90536bed-527e-4fda-9d16-da22379fd0ab.png">


## when user click on search button and search something

<img width="494" alt="Screenshot 2022-08-21 at 12 26 51 AM" src="https://user-images.githubusercontent.com/62178420/185762343-e0929cff-6e1a-4ac3-b3f4-b9a5707e1952.png">



## NOTE 
```
    If you face CORS issue please use this extension for now
    Allow CORS: Access-Control-Allow-Origin : https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
    CORS Unblock:    https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en
```

## Scope of improvements or enhancement of features
```
    1. One end point or proxy can be used for all the services, so that frontend don???t have to maintain & share a key and don???t have to call another API for valid authorization.
    2. Lazy loading of images
    3. Login flow can be improved 
    4. In comment section, 
    4.1??If user is logged in, we can show a text box to user to fill their comments.
    4.2??If user is logged out, we can show user a login button.
    5 User can got to article page by click on article and same for search article, where we need an API which will share the individual article details 
    6 Footer section
```
