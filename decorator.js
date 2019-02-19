const Decorator = function (){
  this.paintStock = [];

}

Decorator.prototype.addStock = function(paint){
  this.paintStock.push(paint);
}

Decorator.prototype.volumeStock = function(){
  if(this.paintStock.length === 0 ){
    return "Buy Paint Bro";
  } else {
    
  }

};

module.exports = Decorator;
