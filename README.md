# Proxying node app template

## **TL;DR**
```sh
npm i
npm start
### after done testing
npm run killall
```

## The long story

This is a quick and dirty template to run different nodejs apps from one location.  There are two sample projects `hello1` and `hello2`.  These can be anything and do not have to be in the same folder.  These would be started by something similar to [supervisord](http://supervisord.org/), but for this project, they'll be started by the main `npm` scripts.  Here's a list of the aforementioned scripts:

- startone
- killone
- starttwo
- killtwo
- start
- killall

The sample projects also have a few scripts, which don't really matter for this project, but for completeness, they are `start` and `dev` for both.

For each sample project, as well as the main project, you can specify which port the application shows up by putting it in their respective `port` file.

To add additional applications, add another `app.use()` line to the main project `index.js`.  For example:

```sh
# app.use('<location>', proxy('localhost:<port #>'))

  app.use('/newapp', proxy('localhost:30000'))

```
Just be sure that the main proxy application doesn't have a conflicting location in its `./routes.js`.  Now, it is setup to serve two files, `index.html` and a `404.html` document when it can't find anything to serve.
