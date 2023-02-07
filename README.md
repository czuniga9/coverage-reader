Simple coverage.zip viewer

## Build Steps

* Copy your `coverage.zip` file to the `public` folder
* Run `npm install`
* Run `npm run build`
* Point nginx to the `dist` folder
    * `cd dist`
    * `valet link`
* Go to `http://dist.test`
