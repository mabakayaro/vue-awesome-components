# vue-aw-components


- AwesomeCrud
- AwesomeForm
- AwesomeTable
- AwesomeList
- AwesomeLayout
- AwesomeKanban
- AwesomeBus


## Dependencies

This package depends on certain packages that must be intalled separately.
They are all listed in the peer dependencies of the project.



## install
```
## add yarn to your project
yarn add vue-aw-components
```


Add in your main.js
```
import VueAwesomeComponents from 'vue-aw-components/plugin';

// or to import separately the components you need

import {EnyoCard, AwesomeTable} from 'vue-aw-components';

```

And for the styling you'll also need :

```
import VueAwesomeComponents from 'vue-aw-components/src/main.scss';

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