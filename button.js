/* To Create Button Class
@Anish J
*/ 
class PrimeButton extends HTMLElement {

   createdCallback(){
        this.innerHTML = "<button class='primeButtonClass'></button>";
        let btn = this.querySelector('.primeButtonClass');
		btn.addEventListener('click',() => this.doPress());
   }

   attachedCallback(){
	   let btn = this.querySelector('.primeButtonClass');
		btn.id =this.dataset['id'];
        btn.textContent = this.btntext != null ? this.btntext : this.dataset['text'];
   }
   
   doPress(){
	 eval(this.dataset['press']);
   }
}

document.registerElement("prime-button", PrimeButton);

