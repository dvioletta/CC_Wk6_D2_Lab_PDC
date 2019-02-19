const Paint = function(capacity){
  this.capacity = capacity;
  this.empty = false;
};

Paint.prototype.checkEmpty = function(){
  if (this.capacity > 0) {
    return false;
  }else {
    return true;
  }
}

Paint.prototype.reduce = function(amountUsed) {
  if (this.capacity >= amountUsed){
    this.capacity -= amountUsed;
  } else {
    return console.log("Not enough paint bro");
  }
}

module.exports = Paint;
