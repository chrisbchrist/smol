MERN URL Shortener
===========================

A simple URL shortening microservice with a single page UI.

POST a valid ```url``` parameter to ```'/api/shorturl/new'``` to receive a response:
```
{
  original_url: //The URL you sent,
  short_url: //The ID to redirect to that URL
}
```

And then access the URL redirect by navigating to ```'/api/shorturl/:url_id'```.

Uses NPM's ```url``` and ```dns``` libraries to validate and resolve URL's, and a counter collection to auto-increment ID's for the shortest ones possible.


Exported from [Glitch](https://glitch.com/about).

\ ゜o゜)ノ
