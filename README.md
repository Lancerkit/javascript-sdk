# Lancerkit SDK

The Lancerkit SDK is a Javascript library that provides an easy-to-use interface for integrating the Lancerkit web application into your own applications.

## Installation

You can install the Lancerkit SDK using npm:

```bash 
npm install lancerkit 
``` 

## Usage

First, you need to create an instance of the Lancerkit class with your Lancerkit API key (in order to get your key, please signup at [https://lancerkit.com](https://lancerkit.com) ):

```js 
import {Lancerkit} from 'lancerkit'; 
const lancerkit = new Lancerkit('YOUR_API_KEY');
```

Then, you can call the different methods to interact with the application. 

For instance: 
```js 
let {data} = await lancerkit.listDocuments({page: 2, sort: '-date'})
```

## Contributing

If you would like to contribute to the Lancerkit SDK, please submit a pull request on Github.