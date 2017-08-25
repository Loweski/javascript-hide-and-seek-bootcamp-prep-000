function getFirstSelector(selector){
  return  document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list')
  for(let i = 0; i <list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild(){
  /*var list = document.querySelectorAll('div#grand-node')

  var children = []
  var counter = 0;

  var deepest

  for(let i = 0; i<list.length; i++){
    var currChild = list[i]
    var currDeep
    while(currChild.querySelector(':first-child') != null){
      counter++
      currChild = currChild.querySelector(':first-child')
    }

    if(children[i] === undefined || children[i] < counter){
      children[i] = counter
      deepest = currChild
    }
  }
  return deepest*/
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
