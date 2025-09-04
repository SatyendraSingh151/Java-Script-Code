const student = {
    name : "Satya Yadav",
    age : 25,
    math : 95,
    che : 84,
    phy : 96,
    calcAvg(){
        let avg = (this.math + this.che + this.phy)/3;
        console.log(`Average of ${this.name} scoring in  ${this.math}, ${this.che} and ${this.phy} is = ${avg}`);
        
    }
}