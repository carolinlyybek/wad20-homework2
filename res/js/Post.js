class Post {
    constructor(id, firstname, lastname, avatar, createtime, text, type, url, likes) {
        this.id = id;
        this.name = firstname + " " + lastname;
        this.avatar = avatar;
        this.createtime = createtime;
        this.text = text;
        if (type == 'image') {
            this.type=img;
            this.url = url;
        }
        else if (type == 'video') {
            this.type = video;
            this.url = url;
        }
        else {
            this.type = null;
            this.url = null;
        }
        this.likes = likes;
    }
}