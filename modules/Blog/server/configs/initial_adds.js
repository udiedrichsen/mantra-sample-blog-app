import Collections from '../../lib/collections';

export default function () {
  if (!Collections.Posts.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      Collections.Posts.insert({title, content});
    }
  }
}
