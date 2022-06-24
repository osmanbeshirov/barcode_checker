//digits for testing 
// 8693043021044

//declare elements
const myForm = document.querySelector('#form');
const inputValue = document.querySelector('#inputValue');

//input filter function
inputValue.oninput = function () {
    if (this.value.length > 13) {
        this.value = this.value.slice(0, 13);
    }
}

//form event
myForm.addEventListener('submit', (e) => {
    let myCode = inputValue.value;

    if (inputValue.value.length < 13) {
        alert('Please type 13 digits');
        inputValue.value = '';
    }

    else {
        const splitted = myCode.split('');
        let oddSum = 0;
        let evenSum = 0;

        for (let i = 0; i <= 10; i = i + 2) {
            oddSum = oddSum + Number(splitted[i])
        }

        console.log('OddSum is: ' + oddSum);

        for (let j = 1; j <= 11; j = j + 2) {
            evenSum = evenSum + Number(splitted[j])
        }

        console.log('EvenSum is: ' + evenSum);

        const otherOperations = (evenSum * 3) + oddSum;

        console.log('multiple by 3 and sum OddSum is: ' + otherOperations);

        const lastNum = String(otherOperations).slice(-1);

        console.log('The last num in OddSum is: ' + lastNum)

        const result = 10 - Number(lastNum);

        //barcode testing is here
        if (result == Number(splitted[splitted.length - 1])) {
            alert('Barcode entered correctly')
        }

        else {
            alert('Input is incorrect information')
        }

        inputValue.value = '';
    }

    e.preventDefault()
})

