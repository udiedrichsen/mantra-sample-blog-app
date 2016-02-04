import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from '../modules/Blog/client/posts';
import commentsModule from '../modules/Blog/client/comments';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.init();
