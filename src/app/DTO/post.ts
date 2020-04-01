export class Post {
    post_id: number;
    post_title: string;
    post_desc: string;
    post_date: Date;
    user_id: number;
    community_id: number;
    file: string;

    public constructor(
        post_id: number,
        post_title: string,
        post_desc: string,
        post_date: Date,
        user_id: number,
        community_id: number,
        file: string) {
        this.post_id = post_id;
        this.post_title = post_title;
        this.post_desc = post_desc;
        this.post_date = post_date;
        this.user_id = user_id;
        this.community_id = community_id;
        this.file = file;
    }

}
