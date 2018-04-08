var addBtn = document.getElementById('addBtn');
var itemList = document.querySelector('ul');


addBtn.addEventListener('click',createItem);
itemList.addEventListener('click',removeItem);

// function to create an element in list.
function createItem(e) {
  var input = document.getElementById('input').value;
  // get list element
  var itemList = document.querySelector('ul');
  // create <li> element and store it in variable li.
  var li = document.createElement('li');
  // create <i> element and store it in variable checkbtn.
  var checkbtn = document.createElement('i');
  // add class to the checkbtn element.
  checkbtn.className = "fa fa-check-circle fa-lg mr-lg-2"
  // attach the checkbtn to the li element.
  li.appendChild(checkbtn);
  // create a text node and store it in text variable.
  var text = document.createTextNode(input);
  //  attach the text node to the li element.
  li.appendChild(text);
  // add class name to the li element.
  li.className = 'list-group-item';
  // create <i> element and store it in variable deletebtn.
  var deletebtn = document.createElement('i');
  // add class to the deletebtn element.
  deletebtn.className = "float-right fa fa-trash fa-lg";
  // attach the deletebtn to the li element.
  li.appendChild(deletebtn);
  // attach the li element to the itemList.
  itemList.appendChild(li);
}

// function to remove item from list.
function removeItem(e){
  if(e.target.classList.contains('fa-trash')){
    var node = e.target.parentNode;
    var containerNode = node.parentNode;
    containerNode.removeChild(node);
  }
}
