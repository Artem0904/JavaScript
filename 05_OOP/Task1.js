

// class CssClass{
//     constructor(){
//         this._styles = [];
//         this._cssCode = "";
//     }

//     addStyle(style = []){
//         this._styles.push(style);
//     }

//     getCSS(){
//         for (let i = 0; i < this._styles.length; i++) {

//             this._cssCode += this._styles[i][0] + " {";
//             for (let j = 0; j < this._styles[i][1].length; j++) {
//                 this._cssCode += " " + this._styles[i][1][j] + " ";
//             }
//             this._cssCode += "}\n";
//         }
//         console.log(this._cssCode)
//     }
// }

// let cl = new CssClass();
// cl.addStyle([".border", ["padding: 10px;", "margin: 15px;"]]);
// cl.addStyle([".color", ["color: black;", "backround-color: white;"]]);
// cl.getCSS();


class CssClass{
    constructor(name){
        this._styleProps = [];
        this._cssCode = "";
        this._name = name;
    }

    addStyleProp(styleProp){
        this._styleProps.push(styleProp);
    }

    removeStyleProp(index){
        if(this._styleProps.length - 1 < index || index < 0){
            console.log(`cannot remove property (index = ${index})`);
        }
        else{
            delete this._styleProps[index];
        }
    }

    getCSS(){
            this._cssCode += this._name + " {";
            for (let property of this._styleProps) {
                this._cssCode += " " + property + "; ";
            }
            this._cssCode += "}\n";
        console.log(this._cssCode)
    }
}

let cl = new CssClass(".border");
cl.addStyleProp("margin: 50px");   
cl.addStyleProp("padding: 10px");
cl.addStyleProp("color: yellow");
cl.addStyleProp("border-radius: 3px");
cl.getCSS();
cl.removeStyleProp(2);
cl.getCSS();
