module.exports = function toReadable(number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenth = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numberString = number.toString();

    if (number === 0) {
        return 'zero';
    }

    if (number < 20) {
        return ones[number].trim();
    }

    if (numberString.length == 2) {
        return (tenth[numberString[0]] + ' ' + ones[numberString[1]]).trim();
    }

    if (numberString.length == 3) {
        if (numberString[1] === '0' && numberString[2] === '0') {
            return (ones[numberString[0]] + ' hundred').trim();
        }
        else {
            let result = ones[numberString[0]] + ' hundred ' + toReadable(+(numberString[1] + numberString[2]));
            return result.trim();
        }

    }
}