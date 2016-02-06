import injectTapEventPlugin from 'react-tap-event-plugin';
import {createApp} from 'mantra-core';
import initContext from './configs/context';

import coreModule from './app.js';

// modules
import postsModule from '../modules/Blog/client/posts';
import commentsModule from '../modules/Blog/client/comments';

// Material-UI
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';
import colors from 'material-ui/lib/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.green500,
    primary2Color: colors.green700,
    primary3Color: colors.green100,
  },
}, {
  avatar: {
    borderColor: null,
  }
});

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(postsModule);
app.loadModule(commentsModule);
app.init();
