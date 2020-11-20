# Vue Awesome components
> Super charge your dev with ready to use power components

A set of various vue components to simplify the creation of backoffices and admin panels.

See [Github](https://github.com/enyosolutions-team/vue-aw-components/).

## Documentation

https://enyosolutions-team.github.io/vue-awesome-components/

## Dependencies

This package depends on certain packages that must be intalled separately. All the needed packages are listed as peerDependencies.



## install
```
yarn add vue-aw-components
```

Add in your main.js
```
import VueEnyoComponents from 'vue-aw-components/plugin';

// or to import separately the components you need

import {AwesomeList, AwesomeTable} from 'vue-aw-components';

```

And for the styling you'll also need :

```
import VueAwesomeComponents from 'vue-aw-components/build/style.css';

```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```


### migration guide:

#### awesome crud

##### props
modelName and name  becomes `identity`
`displayMode`  becomes `mode`

#### awesome form

##### props
modelName and name  becomes `identity`
`displayMode`  becomes `mode`



#### awesome table (formerly enyo-ajax-table)

##### props
modelName and name  becomes `identity`
`mode`  becomes `dataPaginationMode`
`params`  becomes `apiQueryParams`
