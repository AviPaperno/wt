  var add_btn = document.getElementById("add");
  var	presentList = document.getElementById('present-list');
  var  archiveList = document.getElementById('archive-list');
  var  textArea = document.getElementById('adding-text');
  var  alfSortButton = document.getElementById('alf-sort-button');
  var  timeSortButton = document.getElementById('time-sort-button');
  var  finishButton = document.getElementById('Finish');
  var  deleteButton = document.getElementById('Delete')
  var presentIndex = 0;
  var archiveIndex = 0;

 add_btn.onclick = function()
 {
 	if (textArea.value === '')
 	{
 		alert("Ничего не запланированно")
 	}

 	else
 	{
 		presentIndex+=1;
 		var newLi = document.createElement('li');
 		var rad = document.createElement('input');

 		rad.setAttribute('type', 'checkbox');
 		rad.checked = true;
 		newLi.innerText = textArea.value
    	//newLi.setAttribute('','presentLi'+presentIndex)
    	newLi.setAttribute('data-time', new Date() - new Date(0))
    	newLi.appendChild(rad)
    	presentList.appendChild(newLi)
    	textArea.value = ''

 	}
 }

finishButton.onclick = function()
{

	var deleted = 0;
	var curr = presentList.children;
	console.log(curr);
	for (var i=0;i<presentIndex;i++)
	{
		if (curr[i].children[0].checked)
		{

			var newLi = document.createElement('li');
			var time = new Date() - new Date(0) - curr[i].getAttribute('data-time');
			var text = "Задача: '"+curr[i].innerText + "' выполнена. Время выполнения: " + time/1000 + "c.";

			console.log('OK')
			newLi.innerText = text;
			archiveList.appendChild(newLi);
			presentList.removeChild(curr[i]);
			deleted += 1;
			i-=1;
		}

	}

	presentIndex-=deleted;
	archiveIndex+=deleted;
}

deleteButton.onclick = function()
{

	var curr = presentList.children;
	var x = curr.length;
	for (var i=0;i<x;i++)
	{
		if (curr[i].children[0].checked)
		{

			presentList.removeChild(curr[i]);
			presentIndex-=1;
			i-=1;
		}
	}
}

function compare1(El1, El2) {
  return El1.getAttribute('data-time') - El2.getAttribute('data-time');
}



alfSortButton.onclick = function()
{
	var curr = presentList.children;

	var items = Array.prototype.slice.call(curr);


items.sort(function(a, b){
    return a.textContent.localeCompare(b.textContent);
});


for(var i = 0, len = items.length; i < len; i++) {
    
    var parent = items[i].parentNode;

    var detatchedItem = parent.removeChild(items[i]);
   
    parent.appendChild(detatchedItem);
}
}

timeSortButton.onclick = function()
{
	var curr = presentList.children;

	var items = Array.prototype.slice.call(curr);


items.sort(compare1);

for(var i = 0, len = items.length; i < len; i++) {
    
    var parent = items[i].parentNode;

    var detatchedItem = parent.removeChild(items[i]);
   
    parent.appendChild(detatchedItem);
}
}