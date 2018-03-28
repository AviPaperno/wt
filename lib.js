function add_elem_to_tree(Tree,elem)
{
	if (Tree.length == 0)
	{
		Tree.push(elem);
		Tree.push([]);
		Tree.push([]);
	}
	else if (elem > Tree[0])
	{
		add_elem_to_tree(Tree[2],elem);
	}
	else
	{
		add_elem_to_tree(Tree[1],elem);
	}
}

function tree_to_array(Tree)
{
	if (Tree.length == 0)
	{
		return [];
	}
	else return tree_to_array(Tree[1]).concat(Tree[0],tree_to_array(Tree[2]))
}

function TreeSort(Arr)
{
	var LocalArray = Arr.slice();
	var TR = [];
	for (var i =0; i<LocalArray.length;i++)
	{
		add_elem_to_tree(TR,LocalArray[i]);
	}
	return tree_to_array(TR);
}


function CountingSort(Arr)
{
	var LocalArray = Arr.slice();
	var t = Math.max.apply(null, LocalArray);
	var finalArray = [];
	t+=1;
	var count_array = [];

	for (var i=0;i<t;i++)
	{
		count_array.push(0);
	}
	for (var i =0; i < LocalArray.length;i++)
	{
		count_array[LocalArray[i]]+=1;
	}
		Y = count_array

	for (var i=0;i<t;i++)
	{
		if (count_array[i] > 0)
		{
				finalArray.push(i);
		}

	}

	return finalArray;
}



function CombSort(Arr) {

  var LocalArray = Arr.slice();
  const factor = 1.247;
  let gapFactor = LocalArray.length / factor;
  
  while (gapFactor > 1) {
    const gap = Math.round(gapFactor);
    for (let i = 0, j = gap; j < LocalArray.length; i++, j++) {
      if (LocalArray[i] >= LocalArray[j]) {
        [ LocalArray[i], LocalArray[j] ] = [ LocalArray[j], LocalArray[i] ];
      }
    }
    gapFactor = gapFactor / factor;
  }
  
  return LocalArray;
}


function shuffle( array ) {	// Shuffle an array
	// 
	// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)

	for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	return true;
}


function is_ok(Arr)
{
	for (var i =0;i<Arr.length-1;i++)
	{
		if (Arr[i]>Arr[i+1])
			{
				return false;
			}
	}
	return true;
}

function Bogosort(Arr)
{
	var LocalArray = Arr.slice();

	while (true)
	{
		shuffle(LocalArray);
		if (is_ok(LocalArray))
		{
			break;
		}

	}
	return LocalArray;

}


function BucketSort(Arr){
 
  var bucketCount = Math.floor(Arr.length/4)
  var LocalArray = Arr.slice();
  var min = Math.min.apply(Math,LocalArray), 
      buckets = [],
      bucket_count = bucketCount || 200

  for(var i = 0;i<LocalArray.length;i++){
    var newIndex = Math.floor( (LocalArray[i] - min) / bucket_count );  
    buckets[newIndex] = buckets[newIndex] || []
    buckets[newIndex].push(LocalArray[i])
  }
  var idx = 0
  for(i = 0;i<buckets.length;i++){
    if(typeof buckets[i] !== "undefined"){
      CountingSort(buckets[i]);  
      for(var j = 0;j<buckets[i].length;j++){
        LocalArray[idx++] = buckets[i][j]
      }
    }
  }
  return LocalArray
}


function ShellSort(Arr)
{
	var LocalArray = Arr.slice();
    var n = LocalArray.length, gap = Math.floor(n/2);
    while (gap > 0)
     { for (var j = 0; j < n; j++)
        { var k = j, t = LocalArray[j];
          while (k >= gap && LocalArray[k-gap] > t)
           { LocalArray[k] = LocalArray[k-gap]; k -= gap; }
          LocalArray[k] = t;
        }
      gap = (gap==2) ? 1 : Math.floor(gap*5/14);
     }
    return LocalArray;
}


function elems_less_then_curr(Arr,elem)
{
	var LocalArray = [];
	for (var i = 0; i < Arr.length; i++) {
		if (Arr[i] < elem)
		{
			LocalArray.push(Arr[i])
		}
	}

	return LocalArray;
}

function elems_gross_then_curr(Arr,elem)
{
	var LocalArray = [];
	for (var i = 0; i < Arr.length; i++) {
		if (Arr[i] > elem)
		{
			LocalArray.push(Arr[i])
		}
	}

	return LocalArray;
}

function del_first_elem(Arr)
{
	var LocalArray = [];
	for (var i = 1; i < Arr.length; i++) {
		LocalArray.push(Arr[i]);
	}

	return LocalArray;

}


function QuickSort(Arr)
{
	var LocalArray = Arr.slice();

    if (LocalArray.length == 0) return [];
    var a = [], b = [], p = LocalArray[0];
    for (var i = 1; i < LocalArray.length; i++)
     { if (LocalArray[ i ] < p) a[a.length] = LocalArray[ i ];
       else b[b.length] = LocalArray[ i ];
     }
    return QuickSort(a).concat( p,QuickSort(b) );
}

function HeapSort(Arr) 
{

	var LocalArray = Arr.slice();
    if (LocalArray.length == 0) 
    	return [];
    var n = LocalArray.length, i = Math.floor(n/2), j, k, t;

    while (true)
    { 
    	if (i > 0) 
    		t = LocalArray[--i];
      	else { n--;
             if (n == 0) return LocalArray;
             t = LocalArray[n];  LocalArray[n] = LocalArray[0];
           }        
      j = i;  k = j*2+1;
      while (k < n)
       { if (k+1 < n && LocalArray[k+1] > LocalArray[k]) k++;
         if (LocalArray[k] > t)
          { LocalArray[j] = LocalArray[k];  j = k;  k = j*2+1; }
         else break;
       }
      LocalArray[j] = t; 
    }


    return LocalArray;
}

function RadixSort(Arr)
{
	var LocalArray = Arr.slice();
    var len = LocalArray.length, max = Math.max.apply(null, LocalArray);
 
    for (var exp = 1; max / exp > 0; exp *= 10)
    {
        var output = new Array(len), i, count = [0,0,0,0,0,0,0,0,0,0]
        
        for (i = 0; i < len; i++)
            output[i] = 0

        for (i = 0; i < len; i++)
            count[(Math.floor(LocalArray[i] / exp) % 10)]++

        for (i = 1; i < 10; i++)
            count[i] += count[i - 1]
     
        for (i = len - 1; i >= 0; i--)
        {
            output[(count[(Math.floor(LocalArray[i] / exp) % 10)] - 1)] = LocalArray[i]
            count[(Math.floor(LocalArray[i] / exp) % 10)]--
        }
     
        for (i = 0; i < len; i++)
            LocalArray[i] = output[i]
    }
    
    return LocalArray;
}

