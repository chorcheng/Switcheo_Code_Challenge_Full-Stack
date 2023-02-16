var sum_to_n_a = function(n) {
    return (n*(n+1)/2);
};

var sum_to_n_b = function(n) {
    var sum = 0;
    for (var i = 0; i < n+1; i++){
        sum += i;
    }
    return sum;
};

var sum_to_n_c = function(n) {
    if (n == 1){
        return n;
    }
    return sum_to_n_c(n-1) + n;
};

console.log("a" + sum_to_n_a(7));
console.log("b" + sum_to_n_b(7));
console.log("c" + sum_to_n_c(7));