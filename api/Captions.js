const markov = require('markov');
const m = markov(1);

const API_URL = "https://sauceig.herokuapp.com/";

//get username from input box  

export const getLatestPost = (username) => {
    return fetch(API_URL + username +"/media").then(res => {return res.json()});
};

// get count from input box 

export const getMultiplePosts = (username, count) => {
    return fetch(API_URL + username +"/media?count=" + count).then(res => {return res.json()});
};

export const getLatestCaption = async (username) => {
    const posts = await getLatestPost(username);
    const caption = posts.posts[0].edge_media_to_caption.edges[0].node.text;

    return caption;
}

export const getMultipleCaptions = async (username, count) => {
    const posts = await getMultiplePosts(username, count);
    const captions = []; 

    for(let i = 0; i < count; i++){ 
        if(posts.posts[i] && posts.posts[i].edge_media_to_caption.edges[0]){
            let caption = posts.posts[i].edge_media_to_caption.edges[0].node.text;
            captions.push(caption);  
        }
    }

    return captions;
}

export const generateFakeCaptions = (captions) => {
    captions.forEach(caption => m.seed(caption));
    return captions.map(c => {
        const key = m.pick();
        const cap = m.fill(key);

        return cap.join(' ');
    });
};