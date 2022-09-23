// Creates the model for the recipe with a constructor 
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        // assign the arguments
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}