function inArray(text, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === text) return true;
    }
    return false;
  }
   
  alert(inArray('capital', ['london', 'is', 'the','capital','of','GB']));