var Stack = function() {
    this._storage =
    this.add = function(value){
      // write me
      this.storage.push(value);
    };
    this.remove = function() {
      // write me
      this.storage.pop();
    };
    return this.storage;
  };