import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/components/main_layout.jsx';
import About from '/client/components/about.jsx';

import Post from '/modules/Blog/client/posts/containers/post';
import PostList from '/modules/Blog/client/posts/containers/postlist';
import NewPost from '/modules/Blog/client/posts/containers/newpost';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<h1>Home</h1>)
      });
    }
  });

  FlowRouter.route('/post-list', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });

  FlowRouter.route('/about', {
    name: 'about',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<About/>)
      });
    }
  });
}
