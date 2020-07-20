class Calculator{
  constructor(){
    this.result=0;
  }

  add(a,b)
  {
    this.result=a+b;
    return this.result;
  }
  sub(a,b)
  {
    this.result=a-b;
    return this.result;
  }
  mul(a,b)
  {
    this.result= a*b;
    return this.result;
  }
  div(a,b)
  {
    this.result= a/b;
    return this.result;
  }
 clearRes()
  {
    this.result=0;
  }
  addS(a)
  {
    this.result=a+this.result;
    return this.result;
  }
  subS(a)
  {
    this.result=this.result-a;
    return this.result;
  }
  mulS(a)
  {
    this.result= a*this.result;
    return this.result;
  }
  divS(a)
  {
    this.result= this.result/a;
    return this.result;
  }


}


  module.exports= Calculator;
