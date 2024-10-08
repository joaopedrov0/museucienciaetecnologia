// Este documento tem como objetivo descrever o objeto que representa os artefatos do museu

class Artfact{

    name: String
    category: Number
    description: String
    id: Number
    image: String

    // <artfactid-imageNum.png>

    categoryList = [
        "Peças de computador",
        "Periféricos",
        "Eletrodomésticos"
    ]

    constructor(name: String, category: Number, description: String){
        this.name = name
        this.category = category
        this.description = description
    }

}