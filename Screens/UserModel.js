class UserModel {

    number;
    text;
    text1;
    
  
    constructor () {}
  
    setNumber(number){
      this.number = number;
    }
    setText(text){
      this.text = text;
    }
    setText1(text1){
      this.text1 = text1;
    }
  }
  
  const globalModel = new UserModel();
  export default globalModel;
  