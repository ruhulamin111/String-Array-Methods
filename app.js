// check with index of 
function search(input) {
    const shop = [
        'Laptop acer',
        'Laptop asus',
        'Hp',
        'Dell',
        'Vivobok Laptop',
    ];
    const output = [];
    for (const item of shop) {
        if (item.toLowerCase().indexOf(input.toLowerCase()) != -1) {
            output.push(item);
        }
    }
    return output;
}
const result5 = search('laptop');
// console.log(result5);

// check with includes 
function searchItem(input) {
    const shop = [
        'Laptop acer',
        'Laptop asus',
        'Hp',
        'Dell',
        'Vivobok Laptop',
    ];
    const output = [];
    for (const item of shop) {
        if (item.toLowerCase().includes(input.toLowerCase())) {
            output.push(item);
        }
    }
    return output;
}
const result1 = searchItem('laptop');
// console.log(result1);

// check with starwith 
function searchItem(input) {
    const shop = [
        'Laptop acer',
        'Laptop asus',
        'Hp',
        'Dell',
        'Vivobok Laptop',
    ];
    const output = [];
    for (const item of shop) {
        if (item.toLowerCase().startsWith(input.toLowerCase())) {
            output.push(item);
        }
    }
    return output;
}
const result2 = searchItem('laptop');
// console.log(result2);

// check with endwith 
function searchItem(input) {
    const shop = [
        'Laptop acer',
        'Laptop asus',
        'Hp',
        'Dell',
        'Vivobok Laptop',
    ];
    const output = [];
    for (const item of shop) {
        if (item.toLowerCase().endsWith(input.toLowerCase())) {
            output.push(item);
        }
    }
    return output;
}
const result3 = searchItem('laptop');
// console.log(result3);

// split and splice array 
const shopName = 'Asus republic of gamers';
const shop = ['Asus republic of gamers', 'in Bangladesh'];
const slice1 = shop.slice(2, 8);
const slice2 = shop.split(' ');
const slice3 = shop.substring(5, 8);
const slice4 = shop.substr(5, 8);
const slice5 = shop.concat(' in BD');
const slice6 = shop.join(' ');
// console.log(slice);

const markSheet = [35, 46, 57, 89, 49, 58, 20, 50];
const markSheet2 = [35, 93, 84, 85, 50];
const result6 = markSheet.concat(markSheet2);
const result7 = markSheet.splice(3, 2);
const result8 = markSheet.slice(3, 7);
const result9 = markSheet.splice(3, 3, 77, 88, 99, 100);
console.log(markSheet);
// console.log(result4);

// sorting methods 
const markSheet3 = [35, 46, 57, 89, 899, 2, 49, 58, 20, 50];
const single1 = markSheet.sort();
const single2 = markSheet.reverse();
const single3 = markSheet.sort().reverse();
const single4 = markSheet.sort(function (a, b) { return b - a });
const single5 = markSheet.sort(function (a, b) { return a - b });
// console.log(single);

function marks(num1, num2) {
    let result = 0;
    for (num of arguments) {
        result = result + num;
    }
    return result;
}
const result10 = marks(34, 45);
const result11 = marks(34, 45, 76, 23);
// console.log(result);
