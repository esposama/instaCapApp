import { getLatestPost, getMultiplePosts, getLatestCaption, getMultipleCaptions } from './Captions';

describe('instagram api', async () => {
    it('should return a list of instagram posts', async () => {
        const posts = await getLatestPost("delvaze");

        expect(posts);
        expect(posts.next);
        delete posts.next;
        expect(posts.posts);
        expect(posts).toMatchSnapshot();
    });

    it('should return 4 posts for a user', async () => {
        const posts = await getMultiplePosts("delvaze", 4);

        expect(posts);
        expect(posts.next);
        expect(posts.posts.length).toEqual(4);

    });

    it('should get the caption from a post', async () => {
        const posts = await getLatestPost("delvaze");
        
        expect(posts);
        expect(posts.posts[0].edge_media_to_caption.edges[0].node.text).toMatchSnapshot();
    });

    it('should get the latest caption', async () => {
        const posts = await getLatestPost("delvaze");
        
        expect(posts);
        expect(posts.posts[0].edge_media_to_caption.edges[0].node.text).toMatchSnapshot();

        const post_caption = posts.posts[0].edge_media_to_caption.edges[0].node.text; 
        const caption = await getLatestCaption("delvaze"); 
        expect(post_caption).toBe(caption); 
    });

    it('should get the captions from multiple posts', async () =>{
        const posts = await getMultiplePosts("delvaze", 4); 
        const captions = await getMultipleCaptions("delvaze", 4);
        
        expect(posts);
        expect(captions);

        expect(posts.posts.length).toEqual(4);
        expect(captions.length).toEqual(4); 

        let posts_captions = []; 

        for(let i = 0; i < posts.posts.length; i++){
            let post_caption = posts.posts[i].edge_media_to_caption.edges[0].node.text; 
            posts_captions.push(post_caption); 
        }

        expect(posts_captions[0]).toBe(captions[0]); 
        expect(posts_captions[1]).toBe(captions[1]); 
        expect(posts_captions[2]).toBe(captions[2]); 
        expect(posts_captions[3]).toBe(captions[3]); 

    }); 
});