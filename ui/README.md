UI part of tapjoy application for checking palindroms.

## How to run

In the project directory, you can install dependencies:

```
yarn install
yarn add git+https://github.com/Vikasg7/line-reader-browser.git
```

Runs the app in the development mode.<br />

 `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Improvements

### TODOs to make it prod ready

* implement redux store
* improve graphics
* add tests for main functions
* improve behavior when processing data
* add posibility to stop file upload
* improve performance by sending optimized bulks - currently 20000 messages in a bulk
* mobile version
* highlight found string in the UI ( enhance BE response, replace text with <span class=""></span> )
* save grid's page when refresh is in process
