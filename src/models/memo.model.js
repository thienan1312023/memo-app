export default class Memo {
    constructor(id, title, content, color) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.color = color;
        this.date = Date.now();
    }
}
