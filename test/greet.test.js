describe('greet test' , function(){
    it('it should return Hello, Sizwe' , function(){
        assert.equal('Hello, Sizwe', greet("Sizwe"));

    });

});

describe('isFromBellville test' , function(){
    it('it should return True, when the number plate from Bellville startswith "CY"' , function(){
       
        assert.equal(isFromBellville('CY 123'), true);
    });

});

describe('regCheck test' , function(){
    it('it should return True, when the reg number plate endswith "GP","ECP", "MP", "L"' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
   assert.equal(regCheck('5566 L', 'L'), true);
   assert.equal(regCheck('ERT 123 ECP', 'ECP'), true);
    assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });
    
    
});

// describe('countRegNumber test' , function(){
//     it('it should return True, if  reg number has CA 182736,CY 523519,CJ 812328 and that count to three' , function(){
       
//         assert.equal(countRegNumber, 3);
//     });

// });

describe('count Reg Number test', function () {
   

    it('count a single registration number', function () {
        const regNumbers = 'CA1234';
        const result = countRegNumber(regNumbers);
        const expected = 1;
        assert.equal(result, expected);
    });
    
    it('count multiple registration numbers', function () {
        const regNumbers = 'CA1234,CY5678,CJ9012';
        const result = countRegNumber(regNumbers);
        const expected = 3;
        assert.equal(result, expected);
    });

});

describe('isWeekday test' , function(){
    it('it should return True, when it is a weekday ' , function(){
       
       

        assert.equal(isWeekday('Monday'), true); 
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });

});

// describe('YearsAgo test' , function(){
//     it('it should return how many years ago that year is from the current year' , function(){
       
//        assert.equal( (new Date().getFullYear() - 1976), yearsAgo(1976));
//        assert.equal( (new Date().getFullYear() - 2000), yearsAgo(2000));

//     });

// });

// describe('yearsAgo Function test', function () {
//     it('calculate how many years ago the given year was', function () {
//         const result = yearsAgo(2024);
//         assert.equal(result, 0);
//     });

//     it('the current year', function () {
//         const currentYear = new Date().getFullYear();
//         const result = yearsAgo(currentYear);
//         assert.equal(result, 0);
//     });

//     it('future year', function () {
//         const futureYear = new Date().getFullYear() + 30;
//         const result = yearsAgo(futureYear);
//         assert.equal(result, -30);
//     });
// });



// describe('yearsAgo Function test', function () {
//     it('calculate how many years ago the given year was', function () {
//         const result = yearsAgo(2024);
//         assert.equal(result, 0);
//     });

//     it('the current year', function () {
//         const currentYear = new Date().getFullYear();
//         const result = yearsAgo(currentYear);
//         assert.equal(result, 0);
//     });

//     it('future year', function () {
//         const futureYear = new Date().getFullYear() + 30;
//         const result = yearsAgo(futureYear);
//         assert.equal(result, -30);
//     });
// });

describe('transportFee test' , function(){
    it('it should returns the right price based on the shift you are working.' , function(){
       
       assert.equal(transportFee('morning'), 'R20');

       assert.equal(transportFee('afternoon'), 'R10');

       assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');


    });

});

// describe('fromWhere test' , function(){
//     it('If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place! ' , function(){
       
//         assert.equal(fromWhere('CY 567489'), 'Bellville');
//         assert.equal(fromWhere('CJ 343502'), 'Paarl');
//         assert.equal(fromWhere('CA 987504'), 'Cape Town');
//         assert.equal(fromWhere('ZN 568593'), 'Some other place!');

//     });

// });


describe('from Where test', function () {
    it('return Bellville for registration number starting with CY', function () {
        assert.equal(fromWhere('CY 123'), 'Bellville');
    });

    it('return Paarl for registration number starting with CJ', function () {
        assert.equal(fromWhere('CJ 123'), 'Paarl');
    });

    it('return Cape Town for registration number starting with CA', function () {
        assert.equal(fromWhere('CA 123'), 'Cape Town');
    });

});



describe('countAllFromTown test' , function(){
    it('It should return the number of registration numbers in the string that is for that town. ' , function(){
       
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
        
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)
    });

});

describe('totalPhoneBill test' , function(){
    it('For the string above totalPhoneBill should return R7.45. ' , function(){
       
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});

describe('countAllPaarl test' , function(){
    it('it should  returns the number of registration numbers in the string for Paarl. ' , function(){
       
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
            

    });

});

// describe('findItemsOver20 test' , function(){
//     it('it should return all the products that have a quantity higher than 20. ' , function(){
       
        
//             assert.deepEqual(results, findItemsOver20(itemList));
//             assert.deepEqual(results2, findItemsOver20(itemList2));
//             assert.deepEqual(results3, findItemsOver20(itemList3));

//         //   console.log('findItemsOver20 passed!')

//     });

// });

describe('find Items Over 20 test', function () {
    it('return items with quantity over 20', function () {
        const items = [
            { name: 'apple', qty: 10 },
            { name: 'banana', qty: 25 },
            { name: 'grapes', qty: 30 }
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, [
            { name: 'banana', qty: 25 },
            { name: 'grapes', qty: 30 }
        ]);
    });

    it('return an empty array if no items have quantity over 20', function () {
        const items = [
            { name: 'apple', qty: 10 },
            { name: 'banana', qty: 15 },
            { name: 'grapes', qty: 5 }
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, []);
    });

    it('return all items if all have quantity over 20', function () {
        const items = [
            { name: 'apple', qty: 25 },
            { name: 'banana', qty: 30 },
            { name: 'grapes', qty: 35 }
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, [
            { name: 'apple', qty: 25 },
            { name: 'banana', qty: 30 },
            { name: 'grapes', qty: 35 }
        ]);
    });
});

// describe('findItemsOver test' , function(){
//     it('it should return products that have quantity higher than the threshold. ' , function(){
       
        
//         assert.deepEqual(results, findItemsOver(itemList, 20));
//         assert.deepEqual(results2, findItemsOver(itemList2, 20));
//         assert.deepEqual(results3, findItemsOver(itemList3, 20));

//         console.log('findItemsOver passed!');

//     });

// });

describe('find Items Over test', function () {
    it('return items with large quantities', function () {
        const items = [
            { name: 'apples', qty: 10 },
            { name: 'bananas', qty: 25 },
            { name: 'oranges', qty: 30 },
        ];
        const threshold = 20;
        const result = findItemsOver(items, threshold);
        const expected = [
            { name: 'bananas', qty: 25 },
            { name: 'oranges', qty: 30 },
        ];
        assert.deepEqual(result, expected);
    });

    it('return an empty array if no items have quantities which are too large', function () {
        const items = [
            { name: 'apples', qty: 10 },
            { name: 'bananas', qty: 15 },
            { name: 'oranges', qty: 20 },
        ];
        const threshold = 25;
        const result = findItemsOver(items, threshold);
        const expected = [];
        assert.deepEqual(result, expected);
    });

    it('return an empty array for an empty input list', function () {
        const items = [];
        const threshold = 20;
        const result = findItemsOver(items, threshold);
        const expected = [];
        assert.deepEqual(result, expected);
    });
});


describe('mostProfitableDepartment test' , function(){
    it('it should return most Profitable Department. ' , function(){
       
        
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");

        



    });

});



