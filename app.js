var starbucks = {
    coffee : {
        americano: 'классический черный кофе с молоком',
        latte : 'кофе с молочной пенкой',
        cappucсino : 'кофе со взбитыми сливками',
        espresso : 'черный кофе с густой пенкой',
    },
    tea : {
        black: 'Черный чай',
        green: 'Зелёный чай',
        cold:'Холодный чай',
        fruit:'Фруктовый чай',
    }
}
var order = prompt('Какой кофе Вы желаете?')
if (starbucks.coffee[order] === undefined) {
    if (starbucks.tea[order] !== undefined) {
        console.log(starbucks.tea[order]);
    } else {
        console.log('Такого кофе нет в наличии');
    }
}else {
        console.log(starbucks.coffee[order]);
}
