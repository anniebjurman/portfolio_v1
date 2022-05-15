export class Project {
    id: Number;
    title: string;
    content: string;
    link: string;
    images: string[] = [];
    builtWith: string;

    constructor(id: Number, title: string, content: string, link: string, image1: string, image2: string, image3: string, builtWith: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.link = link;
        this.images.push(image1, image2, image3);
        this.builtWith = builtWith;
    }
}
