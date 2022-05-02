export class Project {
    title: string;
    content: string;
    link: string;
    images: string[] = [];
    builtWith: string;

    constructor(title: string, content: string, link: string, image1: string, image2: string, image3: string, builtWith: string) {
        this.title = title;
        this.content = content;
        this.link = link;
        this.images.push(image1, image2, image3);
        this.builtWith = builtWith;
    }
}
