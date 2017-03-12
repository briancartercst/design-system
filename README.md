# My Design System

This is a primer for building my personal websites. It contains basic typography, colors and other variables.

## Using in an application

Install via [Bower](http://bower.io):

`$ bower install 'git://github.com/persand/design-system.git' --save`

See [README-DESIGNSYSTEM.md](https://github.com/persand/design-system/blob/master/README-DESIGNSYSTEM.md) for more specific info.

## Local setup for viewing or developing

We've setup a style guide using [Middleman](https://middlemanapp.com) which should be used when previewing or developing the design system.

1. Install [Bundler](https://rubygems.org/gems/bundler) and [Node.js](http://nodejs.org).
2. `$ git clone git@github.com:persand/design-system.git`
3. `$ cd design-system/styleguide`
4. `$ npm install`
5. `$ gulp install`

### Gulp commands

- `$ gulp install`
    - Runs: bundle install and bower install
- `$ gulp serve`
    - Builds Middleman and create a browser-sync server
- `$ gulp build`
    - Builds Middleman

