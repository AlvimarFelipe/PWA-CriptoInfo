let filtros= document.querySelectorAll('input[type=radio][name="filtro_moeda"]')

function mudarNoticias(event){
    let notodos = document.getElementsByClassName('todos')
    for(i=0;i<notodos.length;i++){
        document.getElementsByClassName('todos')[i].classList.add('d-none')
    }
	if(this.value=='todos'){
		let notodos = document.getElementsByClassName('todos')
        for(i=0;i<notodos.length;i++){
            document.getElementsByClassName('todos')[i].classList.remove('d-none')
        }
	}else if(this.value=='ETH'){
		let notETH = document.getElementsByClassName('ETH')
        for(i=0;i<notETH.length;i++){
            document.getElementsByClassName('ETH')[i].classList.remove('d-none')
        }
    }else if(this.value=='BTC'){
		let notBTC = document.getElementsByClassName('ETH')
        for(i=0;i<notBTC.length;i++){
            document.getElementsByClassName('BTC')[i].classList.remove('d-none')
        }
    }
	
}

Array.prototype.forEach.call(filtros,function(filtros){
	filtros.addEventListener('change',mudarNoticias)
})

document.querySelector('.jsc').addEventListener('click',()=>{
  let moeda = ''
        if (document.getElementById("BTC").checked ==true){
            moeda = 'BTC'
        }else if (document.getElementById("ETH").checked ==true){
            moeda = 'ETH'
        }else if (document.getElementById('todos').checked == true){
              moeda = 'none'
        }
  window.location.href = 'compra.html?moeda='+moeda
})

