export class Project {
    id: number;
    title: string;
    content: string;
    link: string;
    images: string[] = [];
    builtWith: string;
    date: string;
    format: string;

    constructor(id: number, format: string, date: string, title: string, content: string, link: string, image1: string, image2: string, image3: string, builtWith: string) {
        this.id = id;
        this.format = format;
        this.date = date;
        this.title = title;
        this.content = content;
        this.link = link;
        this.images.push(image1, image2, image3);
        this.builtWith = builtWith;
    }
}
