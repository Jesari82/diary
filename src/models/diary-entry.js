export class DiaryEntry{
    constructor(title, content, image) {
        this.title = title;
        this.content = content;
        this.image = image;
        this.date = new Date();
    }
}