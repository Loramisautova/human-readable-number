module.exports = function toReadable (num) {
    const units = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    const tens = [
        'zero',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    if (num < 20) {
        return units[num];
    } else if (num < 100) {
           if ((num % 10 === 0)) {
               return tens[Math.floor(num / 10)];
           } else {
               return `${tens[Math.floor(num / 10)]} ${units[num % 10]}`
           }
    } else {
        if ((num % 100 === 0)) {
            return `${units[Math.floor(num / 100)]} hundred`;
        } else {
            return `${units[Math.floor(num / 100)]} hundred` + ' ' + toReadable([num % 100]);
        }
    }
}
