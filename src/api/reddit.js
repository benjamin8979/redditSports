import { sportsSubs } from '../data/data';

const root = 'https://www.reddit.com';

// Fetch posts for subreddit
export const fetchSubredditPosts = async (subreddit) => {
    console.log("subreddit " + subreddit);
    const res = await fetch(`${root}/r/${subreddit}.json`);
    const posts = await res.json();
    return posts.data.children.map(post => post.data);
}

// Fetch comments for post
export const fetchPostComments = async (post) => {
    let path = `${root}/r/${post.subreddit}/comments/${post.id}/${post.title}.json`;
    path = path.replace('?', '');
    console.log(path);
    const res = await fetch(path);
    const comments = await res.json();
    return comments[1].data.children.map((comment, index) => comment.data);
}

// Fetch the most popular 25 subreddits from reddit
// export const fetchSubreddits = async () => {
//     const res = await fetch(`${root}/subreddits.json`);
//     const subs = await res.json();
//     console.log(subs.data.children.map(sub => sub.data.display_name))
//     return subs.data.children.map(sub => sub.data);
// }

// Fetch 'about' data for each sports sub displayed
// Only works without rate limits
// export const fetchAllSubreddits = async () => {
//     const final = [];
//     for (let i = 0; i < sportsSubs.length; i++) {
//         const res = await fetch(`${root}/r/${sportsSubs[i]}/about.json`);
//         const json = await res.json();
//         final.push(json);
//     }
//     return final;
// }