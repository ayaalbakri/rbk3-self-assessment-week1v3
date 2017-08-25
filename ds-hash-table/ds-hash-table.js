var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
        if (storage[hashFn(key, max)] = key) {
        //   var newParent = [];
        //   var newChild = [];
        //  newParent.push(newChild);
        //  storage[hashFn(key, max)] = newParent;
        //  return ;
        // }
        // else {
        //   storage[hashFn(key, max)].push(newChild);
        // }
      },

      insert: function(key, value) {
        //your code is here
        this._storage[hashFn(key, max)] = value;
         if (storage[hashFn(key, max)] === undefined]) {
          var newParent = [];
          var newChild = [];
         newParent.push(newChild);
         storage[hashFn(key, max)] = newParent;
         return ;
        }
        else {
          storage[hashFn(key, max)].push(newChild);
        }

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