# Module Federation Demo

## Setup
1. Clone the repo
1. Navigate to the [./mfe1](./mfe1) and [./mfe2](./mfe2) directories in separate tabs
1. Install dependencies by running `yarn install` in each directory

## Running the apps
1. Start both apps by running `yarn webpack serve` from each directory. 
1. MFE1 should be running at http://localhost:8083/ and MFE2 should be running at http://localhost:8082/
1. Observe the MFE1 Button displayed in the MFE2 app.

Note: a good way to test the lazy loading behavior is to use devtools throttle the network speed and then do a hard refresh (or disable cache and refresh):

## Demo

https://user-images.githubusercontent.com/13430288/123021218-88426e00-d388-11eb-9a1d-72cddf70eeb5.mov
