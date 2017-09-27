/* To find prime No
@Anish J
*/
class Prime {
    constructor(number) {
        let isPrime = true;
        let result = "";
        if (isNaN(number) || !number) {
            result = `Enter valid no`;
        } else if (number < 2) {
            result = `${number} is prime number`;
        } else {
            for (let i = 2; i <= number / 2; i++) {
                var tempValue = number % i;
                if (tempValue == 0) {
                    isPrime = false;
                    break;
                }
            }
            //If isPrime = true; the number is prime
            if (isPrime)
                result = `${number} is prime number`;
            else
                result = `${number} is not a prime number`;
        }
        const resultHTML = `<div>${result}</div>`;
        document.body.innerHTML = resultHTML;
    }
}