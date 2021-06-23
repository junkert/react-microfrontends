# Module Federation Demo

## Setup
1. Clone the repo
1. Navigate to the [./mfe1](./mfe1), [./mfe2](./mfe2), [./mfe3](./mfe3) directories in separate tabs
1. Install dependencies by running `yarn install` in each directory

## Running the apps
1. First make sure to webpack build the distro: `yarn webpack build` in each `mfe` directory
1. Start all 3 apps by running `yarn webpack serve` from each directory. 
1. MFE1 should be running at http://localhost:9001/ and MFE2 should be running at http://localhost:9002/ and MFE 3 should be running at http://localhost:9003/
1. Observe the MFE1 Menu displayed in the MFE2 and MF3 app with links between the applications

Note: a good way to test the lazy loading behavior is to use devtools throttle the network speed and then do a hard refresh (or disable cache and refresh):

## Demo

[./recording.mov](./recording.mov)