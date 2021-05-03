let array=[{marca:'Ford',pat:'abc123'},{marca:'Chevrolet',pat:'abc345'},{marca:'Fiat',pat:'abc678'}];

// //let a=array.indexOf.pat('abc123');
// let b=array.indexOf('abc345');
// let c=array.indexOf('abc678');
// let d=array.indexOf('abc67');


// //console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

function buscarPorPatente(array,patente){
   return array.filter(function(el){
            return el.pat === patente;
          })
}

console.log(buscarPorPatente(array,'abc678'));