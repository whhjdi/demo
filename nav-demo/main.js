var keys = {
    0: { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', 'length': 10 },
    1: { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', 'length': 9 },
    2: { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', 'length': 7 },
    "length":3
}

var hash = {
    'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com', 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
}
var hashInLocalStorage = JSON.parse(localStorage.getItem('qqq')||'null')
// 取出localstorage里qqq对应的hash
if(hashInLocalStorage){
    hash = hashInLocalStorage;
}
for (let i = 0; i < keys['length']; i++) {
    var div1 = document.createElement('div');
    mainx.appendChild(div1);
    var row = keys[i];
    for (let j = 0; j < row['length']; j++) {
        var kbdx = document.createElement('kbd');
        kbdx.textContent = row[j];
        div1.appendChild(kbdx);
        var buttonx = document.createElement('button');
        buttonx.textContent = '编辑';
        buttonx.id=row[j]
        kbdx.appendChild(buttonx);
        buttonx.onclick = function(b){
            console.log(b)
            console.log('我被点击了')
            key = b['target']['id'];
            x = prompt('给我一个网址');
            hash[key] = x;
            console.log(hash)
            localStorage.setItem('qqq',JSON.stringify(hash));
        }
    }

}

document.onkeypress = function(arg){
    key = arg['key'];
    website = hash[key];
    console.log(website);
    // location.href ='http://'+ website;
    window.open('http://'+website,'_blank')
}