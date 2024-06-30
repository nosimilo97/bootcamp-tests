function findItemsOver20(objectList) {
    let result =[];
     for (var i =0; i<objectList.length; i++) {
       var item = objectList[i];
       if (item.qty > 20) {
         result.push(item);
       }
     }
     return result;
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
   console.log(findItemsOver20(itemList));
   console.log(findItemsOver20(itemList2));
   console.log(findItemsOver20(itemList3));
   
   