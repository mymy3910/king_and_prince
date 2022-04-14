const card = document.getElementById('card');
const result = document.getElementById('result');

card.addEventListener('click',
  function(){
    //背景柄クラス削除、トランプ表示
    card.classList.remove('pattern-triangles-md');
    result.style.display = 'block';

    //トランプの配列
    const suit_list = ['♠️','♣️','♦️','♥️'];
    const number_list = ['A','2','3','4','5','6','7','8','9','10','11','12','K'];
   
    const card_list = number_list.map(number => { 
        const suit = suit_list[Math.floor(Math.random() * suit_list.length)];
        return suit + number;
    }) 
   
    //画像の配列
    const image_list = ['img/kp1.jpg','img/kp2.jpg','img/kp3.jpg','img/kp4.jpg','img/kp5.jpg','img/kp6.jpg'];
    
    //imgタグを生成して、画像表示のテスト（後で消す）
    const img = document.createElement('img');
    img.src = image_list[1];
    document.getElementById('img').appendChild(img);

    /*
      TODO1:
        concatでトランプ配列と画像配列を連結した新しい配列を作成
        その配列からランダムに取得して表示とする
        48行目card_list = トランプ配列と画像配列を連結した新しい配列となる想定
  　*/   
    
    /*
      TODO2:
       この方が全部のトランプが網羅できるからこの配列が欲しいけどundifinedとなる。
       console.logに出てくる配列が欲しい。

        const card_list = number_list.map(number => { 
        suit_list.map(suit =>{
          console.log(suit + number)
          return suit + number;
           })
         }) 
    */

    //ランダムに1つ取得して表示
    const card_result = card_list[Math.floor(Math.random() * card_list.length)];   
    result.innerText = card_result;
  }
)

//リセットクリックで背景柄クラスを戻す、トランプ非表示
document.getElementById('reset').addEventListener('click',
  function(){
    card.classList.toggle('pattern-triangles-md');
    result.style.display = 'none';
  }
);