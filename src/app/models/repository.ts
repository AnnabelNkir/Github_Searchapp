export class Repository {
    constructor(public name: string,
                public description: string,
                public url: string,
                public language: string,
                
                public updated_at: Date) {
    }
}