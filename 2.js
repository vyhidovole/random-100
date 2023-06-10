let but = document.getElementById('but')
let del1 = document.getElementById('del1')
let del2 = document.getElementById('del2')
let del3 = document.getElementById('del3')
let out = document.getElementById('out')
let row = document.getElementById('row')


but.onclick = f1



function f1() {
    for (let i = 0; i < 100; i++) {
        let n = Math.floor(Math.random() * 90) + 10
        num.push(n)
    }

    console.log(num)
    out.innerText = num

    const filternum = num.filter(f2)
    function f2(value) {
        return value %= 5

    }
    let str = filternum
    console.log(filternum)
    del1.innerText = str

    let repeat = filternum
    let unique = [...new Set(repeat)]


    console.log(unique)
    let str1 = unique
    del2.innerText = str1

    let double = [11, 22, 33, 44, 55, 66, 77, 88, 99]
    let deldouble = unique
    function search(double, deldouble) {
        let result = [];
        for (let i = 0; i < double.length; i++) {
            if (deldouble.indexOf(double[i]) == -1) {
                result.push(double[i]);
            }
        }
        return result;
    }
    let str2 = (search(deldouble, double))
    console.log(search(deldouble, double))
    del3.innerText = str2

    
    
}



let num = []
