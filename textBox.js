/* To Create TextField Class
@Anish J
*/ 
class PrimeTextBox extends HTMLInputElement {
   createdCallback(){
        this.innerHTML = "<input type='text' class='primeTextClass'></input>";
   }
   attachedCallback(){
	   let textBox = this.querySelector('.primeTextClass');
		textBox.id =this.dataset['id'];
   }
}
document.registerElement("prime-text", PrimeTextBox);

