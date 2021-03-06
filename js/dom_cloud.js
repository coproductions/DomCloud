
window.onload = function(){
  generateDomCloud(document.body)
};

function generateDomCloud(startNode){
  var cloudContainer = document.createElement('div');
  var resultObject = {};
  var resultArray = [];

  var addToObject = function(element){ //logs each element, and tallys it into the resultobject
    var tagName = element.tagName;
    if(tagName in resultObject){
      resultObject[tagName]++;
    } else {
      resultObject[tagName] = 1;
    }
  };

  var sortObject = function(object){ // sorting object by converting it into a sortable array
    var sortable = [];
    for (var element in resultObject){
      sortable.push([element, resultObject[element]])
    }
    sortable.sort(function(a, b) {return a[1] - b[1]})
    return sortable;
  };

  var dive = function(current){  //dives into each node's children,if it has any
    if (current.children.length = 0){
      return;
    }
    for (var i = 0; i < current.children.length; i++) {
      addToObject(current.children[i]);
      dive(current.children[i])
    };
  };

  var printResults = function(array){
    startNode.innerHTML = '';
    var minimumNr = array.length-20;
    if(array.length<20){
      minimumNr = 0;
    }

    for(var i = array.length-1; i >= minimumNr ; i--){
      var newDiv = document.createElement('div');
      newDiv.innerHTML = array[i][0];
      newDiv.style.fontSize = array[i][1]*10;
      cloudContainer.appendChild(newDiv);
    }
    startNode.appendChild(cloudContainer)
  };

  dive(startNode);
  resultArray = sortObject(resultObject);
  console.log(resultArray);
  printResults(resultArray);
};

