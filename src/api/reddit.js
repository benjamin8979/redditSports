import { sportsSubs } from '../data/data';

const root = 'https://www.reddit.com';

export const fetchSubredditPosts = async (subreddit) => {
    const res = await fetch(`${root}/r/${subreddit}.json`);
    const posts = await res.json();
    return posts;
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

export const fetchComments = async () => {
    const res = await fetch(`${root}.json`)
}