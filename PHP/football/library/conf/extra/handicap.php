<?php

//盘口说明对应
return [
    '0' => ['平手','0'], //双方平开，不让球
    '0.25' => ['平手/半球','0/0.5'], //打平输一半,净胜一球全赢
    '0.5' => ['半球',0.5], //打平全输,净胜一球全赢
    '0.75' => ['半球/一球','0.5/1'], //净胜一球赢一半，净胜两球全赢
    '1' => ['一球','1'], //净胜一球算平，净胜两球全赢
    '1.25' => ['一球/球半','1/1.5'], //净胜一球赢一半，净胜两球全赢
    '1.5' => ['球半','1.5'], //净胜一球全输，净胜两球全赢
    '1.75' => ['球半/两球','1.5/2'], //净胜两球赢一半，净胜三球全赢
    '2' => ['两球','2'], //净胜两球算平，净胜三球全赢
    '2.25' => ['两球/两球半','2/2.5'], //净胜两球赢一半，净胜三球全赢
    '2.5' => ['两球半','2.5'], //净胜两球全输，净胜三球全赢
    '2.75' => ['两球半/三球','2.5/3'], //净胜三球赢一半，净胜四球全赢
    '3' => ['三球','3'], //净胜三球算平，净胜四球全赢
    '3.25' => ['三球/三球半','3/3.5'], //净胜三球赢一半，净胜四球全赢
    '3.5' => ['三球半','3.5'], //净胜三球全输，净胜四球全赢
    '3.75' => ['三球半/四球','3.5/4'], //净胜三球赢一半，净胜五球全赢
    '4' => ['四球','4'], //净胜四球算平，净胜五球全赢
    '4.25' => ['四球/四球半','4/4.5'], //净胜四球输一半，净胜五球全赢
    '4.5' => ['四球半','4.5'], //净胜四球全输，净胜五球全赢
    '4.75' => ['四球半/五球','4.5/5'], //净胜五球赢一半，净胜六球全赢
    '5' => ['五球','5'], //净胜五球算平，净胜六球全赢
    '5.25' => ['五球/五球半','5/5.5'], //净胜五球赢一半，净胜六球全赢
    '5.5' => ['五球半','5.5'], //净胜五球全输，净胜六球全赢
    '5.75' => ['五球半/六球','5.5/6'], //净胜六球赢一半，净胜七球全赢
    '6' => ['六球','6'], //净胜六球算平，净胜七球全赢
    '6.25' => ['六球/六球半','6/6.5'], //净胜六球赢一半，净胜七球全赢
    '6.5' => ['六球半','6.5'], //净胜六球全输，净胜七球全赢
    '6.75' => ['六球半/七球','6.5/7'], //净胜七球赢一半，净胜八球全赢
    '7' => ['七球','7'],
    '7.25' => ['七球/七球半','7/7.5'],
    '7.5' => ['七球半','7.5'],
    '7.75' => ['七球半/八球','7.5/8'],
    '8' => ['八球','8'],
    '8.25' => ['八球/八球半','8/8.5'],
    '8.5' => ['八球半','8.5'],
    '8.75' => ['八球半/九球','8.5/9'],
    '9' => ['九球','9'],
    '9.25' => ['九球/九球半','9/9.5'],
    '9.5' => ['九球半','9.5'],
    '9.75' => ['九球半/十球','9.5/10'],
    '10' => ['十球','10'],
    '10.25' => ['十球/十球半','10/10.5'],
    '10.5' => ['十球半','10.5'],
    '10.75' => ['十球半/十一球','10.5/11'],
    '11' => ['十一球','11'],
];