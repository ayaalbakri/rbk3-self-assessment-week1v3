var Stack = function() {
    this._storage = [];
    this.add = function(value){
      // write me
      var x = this._storage;
      x.push(value);
    };
    this.remove = function() {
      // write me
      var x = this._storage;

     x.pop();
    };
  };