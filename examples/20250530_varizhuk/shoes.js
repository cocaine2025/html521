/** Решить задачу.
У меня осталось 2000 рублей.
Когда я куплю туфельки за 750 рублей и 10 
шоколадок за 83 рубля штука, сколько батонов хлеба можно
будет купить на сдачу? Стоимость батона посмотреть
в ближайшем магазине.*/
/**параметризация */
/**конечная сумма - finalsum 
 * стоимость туфелек - priceshoes
 * колличество шоколадок - quantitychoco
 * стоимость одной шоколадки - pricechoco
 * общая стоимость шоколадок - totalchoco
 * общая стоимость товара  - totalprice
 * остаток денег - remainder
 * стоимость хлеба - priceloaf
 * количество батонов - quantityloaf
*/
/**решение в общем виде */
/**totalchoco=quantitychoco*pricechoco
 * totalprice=totalchoco+priceshoes
 * remainder=finalsum-totalprice
 * quantityloaf=remainder/priceloaf
 */
/**результат */

let finalsum=2000;
let priceshoes=750;
let quantitychoco=10;
let pricechoco=83;
let priceloaf=60;
let totalchoco=quantitychoco*pricechoco;
let totalprice=totalchoco+priceshoes;
let remainder=finalsum-totalprice;
let quantityloaf=remainder/priceloaf;
console.log("количество батонов " + quantityloaf)
 