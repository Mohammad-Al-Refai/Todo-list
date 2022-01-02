



export class Item{
    title:string
    type: "TODO"|"IN_PROGRESS"|"DONE"
    constructor(title:string, type: "TODO"|"IN_PROGRESS"|"DONE"){
        this.title=title
        this.type=type
    }
}

 