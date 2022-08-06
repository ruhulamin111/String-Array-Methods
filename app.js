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
const result = search('laptop');
// console.log(result);

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
console.log(result3);



