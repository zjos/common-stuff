# How To Use

Dit project bevat 2 npm packages

## in folder /devdependencies/

package:

    @zjos28/common-dev-stuff

install:

    npm i @zjos28/common-dev-stuff@latest -D

## in folder /

package:

    @zjos28/common-stuff

install:

    npm i @zjos28/common-stuff@latest

description: bevat

    /css/common-globals.css

use package:

    import '@zjos28/common-stuff/css/common-globals.css'

- toe te voegen aan layout.tsx

### in dev

in juiste rootfolder / of /devdependencies

    npm link

### in project

    npm link @zjos28/common-dev-stuff
    npm link @zjos28/common-stuff

### publish naar npmjs.com

(in juiste rootfolder / of /devdependencies)

versie invullen in package.json

    npm login
    npm publish --access public
