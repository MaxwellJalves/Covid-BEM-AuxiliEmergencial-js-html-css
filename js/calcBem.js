//Até R$ 1.599,61
//Multiplica-se salário médio por 0.8 = (80%).
//De R$ 1.599,62 - Até R$ 2.666,29
//A média salarial que exceder a R$ 1.599,61 multiplica-se por 0,5 (50%) e soma-se a R$ 1.279,69.
//Acima de 2.666,29
//O valor da parcela será de R$ 1.813,03, invariavelmente.
function retornarValorDigitado(){
   
    //receber valor
   var salario = document.getElementById('salario').value ;
    //Limpar campo digitado
   document.getElementById('salario').value= '';
   
   //criar condição
   if (salario <=1599.61)
   {
    var resultado = parseFloat(salario) * 0.8;
    document.getElementById('resultado').value = `R$ ${resultado.toFixed(2)}`;
    document.getElementById('resumo').innerHTML = ` * Salario informado  : R$ ${salario} \n * Valor a receber: R$ ${ resultado.toFixed()}`;
   } 
   else if (salario >=1555.62 && salario < 2666.30)
   {
      var resultado = ((parseFloat(salario) * 12)/12)*0.5 + 1279.69;

         if( resultado >1813.03 )
            {
            resultado= 1813.03;
                document.getElementById('resultado').value = `R$ ${resultado.toFixed(2)}`;
                document.getElementById('resumo').innerHTML = ` * Salario informado : R$ ${salario} \n * Valor a receber: R$ ${ resultado.toFixed()}`
            }
            document.getElementById('resultado').value = `R$ ${resultado.toFixed(2)}`
            document.getElementById('resumo').innerHTML = `   *  Salario informado  : R$ ${salario} \n * Valor a receber: R$ ${ resultado.toFixed()}`
    
   } else
   {
       resultado = 1813.03;
        document.getElementById('resultado').value = `R$ ${resultado.toFixed(2)}`
          document.getElementById('resumo').innerHTML = ` * Salario informado  : R$ ${salario} \n * Valor a receber: R$ ${ resultado.toFixed()}`

   }
  
   console.log(resultado)

   
}

