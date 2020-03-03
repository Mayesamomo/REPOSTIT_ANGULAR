export class Post {
    post_id: number;
    post_title: string;
    post_desc: string;
    post_date: Date;
    user_id: number;
    community_id: number;
    file: any;
    public constructor(
        post_id: number,
        post_title: string,
        post_description: string,
        post_date: Date,
        user_id: number,
        community_id: number,
        file: any) {
        this.post_id = post_id;
        this.post_title = post_title;
        this.post_desc = post_description;
        this.post_date = post_date;
        this.user_id = user_id;
        this.community_id = community_id;
        this.file = file;
    }

}
