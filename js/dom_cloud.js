
window.onload = function(){
  generateDomCloud(document.body)
};

function generateDomCloud(startNode){
  var cloudContainer = document.createElement('div');
  var resultObject = {};
  console.log('document.body', document.body)
  console.log('start node',startNode)

  var addToObject = function(element){
    var tagName = element.tagName;
    if(tagName in resultObject){
      resultObject[tagName]++;
    } else {
      resultObject[tagName] = 1;
    }
  };

  var dive = function(current){
    console.log('current in dive',current)
    if (current.children.length = 0){
      return;
    }
    for (var i = 0; i < current.children.length; i++) {
      addToObject(current.children[i]);
      dive(current.children[i])
    };
  };

  var printResults = function(object){
    startNode.innerHTML = '';
    for(var key in object){
      var newDiv = document.createElement('div');
      newDiv.innerHTML = key;
      newDiv.style.fontSize = object[key]*10;
      cloudContainer.appendChild(newDiv);
    }
    startNode.appendChild(cloudContainer)
  };

  dive(startNode);
  printResults(resultObject);
};

