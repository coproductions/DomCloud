
generateDomCloud(document.body);
function generateDomCloud(startNode){
  var cloudContainer = document.createElement('div');
  var resultObject = {};
  var resultArray = [];
  var sortable = [];

  var addToObject = function(element){
    var tagName = element.tagName;
    if(tagName in resultObject){
      resultObject[tagName]++;
    } else {
      resultObject[tagName] = 1;
    }
  };

  var sortObject = function(object){
    for (var element in resultObject){
      sortable.push([element, resultObject[element]])
    }
    sortable.sort(function(a, b) {return a[1] - b[1]})
  };

  var dive = function(current){
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
  sortObject(resultObject);
  resultArray = sortable;
  console.log(resultArray);
  printResults(resultArray);
};



