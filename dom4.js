function onsubmit(e){
  e.preventDefault();

  var inputValue=document.getElementById('item').value;
  var description=document.getElementById('description').value;
   var li=document.createElement('li');
   li.className='list-group-item';

   var newText=document.createTextNode(inputValue);
   var descriptionNode=document.createTextNode(description);

   li.appendChild(newText);
   li.appendChild(descriptionNode);

   var deleteBtn=document.createElement('button');

   deleteBtn.className='btn btn-danger btn-sm float-right delete';

   deleteBtn>appendChild(document.createTextNode('x'));

   li.appendChild(deleteBtn);

   //adding edit button

   var editBtn=document.createElement('button');
   editBtn.className='btn btn-sm float-right editBtn';
   editBtn.appendChild(document.createTextNode('Edit'));

   li.appendChild(editBtn);

   item.appendChild(li);
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}