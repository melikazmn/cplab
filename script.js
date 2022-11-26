/*Finding HTML Elements

document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name


Changing HTML Elements

element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element
element.setAttribute(attribute, value)	Change the attribute value of an HTML element

Adding and Deleting Elements

document.createElement(element)	Create an HTML element
document.write(text)	Write into the HTML output stream


Adding Events Handlers

document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event
*/


document.getElementById("demo").innerHTML = "Hello World!";


document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });