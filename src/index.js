module.exports = function getZerosCount(number, base) {
    let zero_count = number;
    let current_base = base;
    let current_number = number;
    let number_zero_count = 0;
    let base_zero_count = 0;
    for (let i = 2; i <= base; i++) {
        if (current_base % i === 0) {
            number_zero_count = 0;
            while (current_number / i > 0) {
                current_number = Math.floor(current_number / i);
                number_zero_count += current_number;
            }
            current_number = number;
            base_zero_count = 0;
            while (current_base % i === 0) {
                base_zero_count++;
                current_base = Math.floor(current_base / i);
            }
            zero_count = Math.floor(Math.min(zero_count, number_zero_count / base_zero_count));
        }
    }
return zero_count;
}