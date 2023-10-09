export class Task{
    id: number;
    description:string;
    state:string;
    date:string;

    constructor(id: number, description:string, state:string, date:string){
        this.id = id;
        this.description = description;
        this.state = state;
        this.date = date;
    }

}