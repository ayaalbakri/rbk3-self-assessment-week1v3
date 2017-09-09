var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
      	for (var i = 0; i < this._storage[hashFn(key , max)].length; i++) {
          if (this._storage[hashFn(key , max)][i][0] === key ) {
            return this._storage[hashFn(key , max)][i][1]; 
          }
        }
        
      },

      insert: function(key, value) {
        //your code is here
        this._storage[hashFn(key, max)] = value;
         if (this._storage[hashFn(key, max)] === undefined) {
          var newParent = [];
          var newChild = [];
          newChildren[0] = key;
          newChildren[1] = value;
         newParent.push(newChild);
         this._storage[hashFn(key, max)] = newParent;
         return ;
        }
        else {
          //;
           for(var i=0; i<this._storage[hashFn(key, max)].length;i++){
            if(this._storage[hashFn(key, max)][i][0] === key)
              this._storage[index][i][1] = value;
           }
        }
        var newChildren = [];
        newChildren[0] = key;
        newChildren[1] = value;
        this._storage[hashFn(key, max)].push(newChildren)
    }
  }
};


// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};