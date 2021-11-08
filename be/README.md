# tapjoy
Tapjoy interview task

## How to run
node version 12.15.0 needed
npm installed

```
yarn install
npm run start
```

## API to check
```
WS /
{
 line: 0,
 text: 'aabb
}
```

## Config values
You can change 
```
const STRING_LENGTH = 4; // length of comparision string, can be increased, if odd number is placed, string rtXtr is valid => palindrom
const OPENING_REMOVAL_CHAR = '[';
const CLOSING_REMOVAL_CHAR = ']';
```

in `models/constants` to change behavior of the desired output based on different number of characters / different escape character

## Improvements

### TODOs to make it prod ready

* typescript
* environment variables
* load & perf tests


## What is the best option to do such a task?
Definitely not using NodeJS, however with NodeJS and React, we are able to do it user friendly way, even though processing is slower :)

Benchmark tests would prefer pure `C` most probably or `bash / python`.  
