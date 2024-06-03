function findItemsOver(objectLists, threshold) {
    let results =[];
      for (var i=0; i< objectLists.length; i++) {
        var items = objectLists[i];
     var list =  items.qty;
      if( list > threshold) {
        results.push(items);
      }
      }
      return results;
      
    }
    
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 19},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
    ];
    
    var itemList3 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];

console.log(findItemsOver(itemList, 20));
console.log(findItemsOver(itemList2, 20));
console.log(findItemsOver(itemList3, 20));