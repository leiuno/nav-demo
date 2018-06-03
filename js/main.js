var keys = {
  '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
  '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
  '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
  'length': 3,
};
var hash = {
  'q': 'qq.com',
  'w': 'weibo.com',
  'e': 'ele.me',
  't': 'css-tricks.com',
  'm': 'cssmatic.com',
  'w': 'alpha.wallhaven.cc',
  'j': 'jianshu.com',
  'x': 'xiedaimala.com',
  'g': 'github.com',
  'a': 'adamschwartz.co/magic-of-css',
  's': 'cndevdocs.com',
  'c': 'tympanus.net/codrops/category/playground/',
  'z': 'www.zhangxinxu.com/wordpress/category/css/page/25/',
  'b': 'bilibili.com',
}
var hashInLocalStorage = JSON.parse(localStorage.getItem("myCat") || 'null');
if(hashInLocalStorage){
  hash = hashInLocalStorage;
}

var wrapper = document.querySelector('.wrapper');
for(var index = 0; index < keys['length']; index++){
  var div = document.createElement('div');
  div.className = 'row';
  wrapper.appendChild(div);
  var row = keys[index];
  for(var index2 = 0; index2 < row['length']; index2++){
    var kbd = document.createElement('kbd');
    kbd.className = 'key';

    var span = document.createElement('span');
    span.textContent = row[index2];

    var button = document.createElement('button');
    button.textContent = '编辑';
    button.id = row[index2];
    button.onclick = function(e){
      var button2 = e.target;
      var img2 = button2.nextSibling;
      var key = button2.id;
      var x = prompt('给我一个网址');
      hash[key] = x;
      img2.src = 'http://' + x + '/favicon.ico';
      img2.onerror = function(e){
        e.target.src = '//i.loli.net/2018/06/03/5b137610e9ab6.png';
      }
      localStorage.setItem('myCat', JSON.stringify(hash));
    }

    var img = document.createElement('img');
    if(hash[row[index2]]){
      img.src = 'http://' + hash[row[index2]] + '/favicon.ico';
    }else{
      img.src = '//i.loli.net/2018/06/03/5b137610e9ab6.png';
    }
    img.onerror = function(e){
      e.target.src = '//i.loli.net/2018/06/03/5b137610e9ab6.png';
    }
    div.appendChild(kbd);
    kbd.appendChild(span);
    kbd.appendChild(button);
    kbd.appendChild(img);
  }
}

document.onkeypress = function(e){
  var key = e['key'];
  var website = hash[key];
  window.open('http://' + website, '_blank');
}























