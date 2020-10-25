class Post {
    constructor(author, createtime, media, likes) {
        this.name = author.firstname + " " + author.lastname;
        this.avatar = author.avatar;
        this.createtime = createtime;
        this.text = text;
        if (media != null) {
            this.type = media.type;
            this.url = media.url;
        }
        this.likes = likes;
    }
}