import React, {createContext, useState } from "react";

export const Store =createContext();
const ContextStore=(props)=>{
const[data,setdata]=useState([
    

     {
     id:1,
     name:'Pathan',
    //  head:'Adipurush To Ghoomer: Major Bollywood Flops Of 2023 So Far',
     category:'BollyWood',
     image:'https://www.cinejosh.com/newsimg/newsmainimg/pathaan-collections_b_2701230914.jpg',
     para:'Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Shridhar Raghavan and Abbas Tyrewala, from a story by Anand.',
    error:"page is not found"
 },

 {
    id:2,
    name:'Candy',
    category:'BollyWood',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrn53grfhbHWJggLQmhp9IKO7qlQRmx5jAblPo-zqUCpUIQI6iNuVmv143q8hNeWGBUog&usqp=CAU',
    para:'In misty Rudrakund, the brutal murder of a school student pushes troubled teacher Jayant Parekh and cop Ratna Sankhawar to unravel a web of sinister secrets involving rave parties, cold cases, a demon in the woods and a hallucinogen, Candy',

 },
{
    id:3,
    name:'Khufiya',
    category:'BollyWood',
    image:'https://karnatakastateopenuniversity.in/wp-content/uploads/2022/08/Khufiya-Movie-2022.jpg',
    para:'Khufiya (transl. Secret) is a 2023 Hindi-language spy thriller film written, produced and directed by Vishal Bhardwaj..',


},

{
    id:7,
    name:'Gadar 2',
    category:'BollyWood',
    image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghvmc5fDZ7euAfbsDxF_2N1aa6T6F5i9_1TAUHf18HtKDuZpCh5dI7VOjnTdf2kMJ1IpSfIpbMmGcxNi49n_6jiKvjYlhtzMbtLPFfcXScqZHXE9tbGZ_G4d_Aa-UK47y-P5QGHGZEA_dakJrDFXuN7hfHHZF2gzQ4wqFcjIYGmxpjMDiIcIe0A82u/s1600/gadar-2-sunny-deol-movie.jpg',
    para:'Gadar 2 (transl. Rebellion 2; subtitled onscreen with The Katha Continues) is a 2023 Indian Hindi-language period action drama film directed and produced by Anil Sharma and written by.',

},
{
    id:8,
    name:'Aspirants',
    category:'BollyWood',
    image:'https://image.tmdb.org/t/p/original/suXX4sFFgUGMv47jCibP4hhsmN7.jpg',
    para:'Aspirants is an Indian Hindi-language coming-of-age web series produced by The Viral Fever (TVF) and created by Arunabh Kumar and Shreyansh Pandey, written by Deepesh Sumitra Jagdish and was directed by Apoorv Singh Karki.',

},
{
    id:9,
    name:'Family Man',
    category:'BollyWood',
    image:'https://i1.wp.com/katmoviehd.us/wp-content/uploads/2019/09/the-Family-man-full-movie-katmoviehd.us_.jpg?fit=960%2C1440&ssl=1.',
    para:'The Family Man is an Indian Hindi-language spy thriller streaming television series created by Raj & DK[1] for the streaming service Amazon Prime Video and features Manoj Bajpayee as Srikant Tiwari, ',

},
{
    id:10,
    name:'Asur 2',
    category:'BollyWood',
    image:'https://www.91-cdn.com/hub/wp-content/uploads/2023/06/asur-season-2.jpg',
    para:"Asur (pronounced [ə.sʊɾ] transl. Demon) is an Indian Hindi-language psychological crime thriller streaming television series..",
   
  },
{
    id:11,
    name:'Sacred Games',
    category:'BollyWood',
    image:'https://tse3.mm.bing.net/th?id=OIP.gsk3DFIzbjiLHYZP2pzgyQHaHa&pid=Api&P=0&h=180',
    para:"Sacred Games began development after Netflix vice-president Erik Barmack asked Motwane in 2014 to create Indian content for the platform. They decided to adapt Chandra's novel in Hindi. After a script was completed, Motwane asked Kashyap to co-direct; Motwane directed the scenes with Singh, and Kashyap directed Gaitonde's scenes. Swapnil Sonawane was director of photography for Motwane; Sylvester Fonseca and Aseem Bajaj filmed the scenes directed by Kashyap. In the second season, Motwane reduced his involvement to showrunner and was replaced as director by Neeraj Ghaywan. Aarti Bajaj was the editor, and Alokananda Dasgupta composed the background score",
},

{
    id:13,
    name:'Kota Factory',
    category:'BollyWood',
    image:'https://tse2.mm.bing.net/th?id=OIP.-9pOkO1jOSoS26Sw2T7kAgHaD4&pid=Api&P=0&h=180',
    para:'Kota Factory is an Indian Hindi-language streaming television series created by Saurabh Khanna, directed by Raghav Subbu & produced by Arunabh Kumar for The Viral Fever..',
 
},
{
    id:16,
    name:"Extraction 2",
    category:'Hollywood',
    image:'https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcWzBOWXFMhnbCu1y1k--N2HnY32X4XQVKAJIu4W7HRnEeh7FGCN_WmkMq2g39yzwNqSnaz0elw5CBDvoRKwUSdJnWd4Pw3ucNj0fVrpNgwEF-cG0HpAPVTOPvnWunZzMxiR.jpg?r=a98',
    para:'Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission: saving the imprisoned family of a ruthless gangster..[3][4] Studio executives had trouble finding a director; the first few candidates turned down the position before Coppola signed on to direct the film but disagreement followed over casting several characters, in particular, Vito (Marlon Brando) and Michael (Al Pacino). Filming took place primarily on location around New York City and in Sicily, and was completed ahead of schedule. The musical score was composed principally by Nino Rota, with additional pieces by Carmine Coppola.',

},
{
    id:17,
    name:"Bullet Train",
    category:'Hollywood',
    image:'https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUL4rwuABC0b4u-DmKC6UZkNhTZW8dwbRN_TZV1EziEn5RT49S6nhPo8t0lE5igZgnyI6fcT1YBh1Zd6l2SP3V9kVYupyYumPMbEq95zbmebRio0HuiWS6AEfEQ2MDcLc5EjRMNd-CZApYWBsQGxdH14SKFJMmojxr4CaJxDZzDdpuzAzwidt-UFzVTLh0iojZ3ttlVzkw8Kjn0Yd9wRqZO-4jkueuFaQGyiWyWnN3mrREJwGoyuLSk9kTiTjHMiCF0UZ0hAmntO958QOovYBzzddQ.jpg?r=397',
    para:'Five assassins board a Japanese bullet train bound for Kyoto and come to discover that their seemingly separate missions are mysteriously linked..',
},
{
    id:18,
    name:'Scary Movie',
    category:'Hollywood',
    image:'https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZbL7oJSB3s-X7g-bJVTB52xFs9dU-VE3-GY_Iw6EM4dIOIZIQeSBucdlaMBiXIqQGqRbEFG9ROLm4VBB74_lkbUtINQtgDAFTo.jpg?r=612',
    para:'“A group of hapless teens harboring a guilty secret are stalked by an equally bumbling serial killer in this parody of 1990s horror movies.. ',

},
{
    // id:19,
    // name:'StallOne',
    // category:'Hollywood',
    // image:"https://1.bp.blogspot.com/-3pk40BzChvY/Xr5GPNTRuDI/AAAAAAAAAy0/j7VQnZ453DkeQaMuxPD3i_7i219SAG_4gCLcBGAsYHQ/w1200-h630-p-k-no-nu/91STOoJjaoL._SL1500_.jpg",
    // para :"Jason Statham, Sylvester Stallone’s Expend4bles to release in Indian theatres on this date Hollywood powerhouse duo, Jason Statham and Sylvester Stallone, bring explosive action to India in Expend4bles.",
    // error:"page is not found"
},
{
    id:20,
    name:"Raging Bull",
    category:'Hollywood',
    image:'https://upload.wikimedia.org/wikipedia/en/5/5f/Raging_Bull_poster.jpg',
    para:'Raging Bull is a 1980 biographical sports drama film directed by Martin Scorsese123. The film chronicles the life of Jake LaMotta, a middleweight boxing champion known as The Raging Bull and The Bronx Bull 1. The film follows two decades of his life, and how the violence inside the ring was only an extension of his violence and temper outside of it1. The film is shot in black and white, except for the home video footage2.',

},
{
    id:21,
    name:'Heart of stone',
    category:'Hollywood',
    image:'https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXl6zodS7Jvuc-mOjBB-xuOzDoaAtHqFxQKeQ9Mg-1eikrdhgoTJyoRf7CnyleEQmeAIcc8H2nUYcbxumUMC5EAo8iACzWirylqRmYi0mDSXQdPSnJMHD-8tuaiQDJ89YmBd.jpg?r=545',
    para:'An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon..',

},
{
    id:22,
    name:'The Amazing Spiderman',
    category:'Hollywood',
    image:'https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSpKnpVbtFfCx55J_L8MeRwcv4fAH6fNMx7jc8T4ULKxdj0ZbmPQOqDMvSCX_xoGzrTRM5RX_NuZvEImfqb4zWWdZRTM28ThkfU.jpg?r=e56',
    para:'Andrew Garfield returns as Peter Parker, a teenager embracing his role as superhero as he battles new villains and uncovers more clues about his past.',

},
{
    id:23,
    name:'Rebel Without a Cause',
    category:'Hollywood',
    image:'https://m.media-amazon.com/images/M/MV5BYzk2ZDU3MmMtMDBmMi00YWIyLTkxM2YtZjg3MzgyOTAzZjg0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX140_CR0,0,140,209_AL_.jpg',
    para:'Rebel Without a Cause is a 1955 American coming-of-age romantic drama film about emotionally confused suburban, middle-class teenagers12345. It was directed by Nicholas Ray and filmed in the then recently introduced CinemaScope format1. The movie tells the story of an affluent family and their troubled son, Jim, who makes friends at the local high school with equally troubled teenagers, Judy and Plato3. The movie featured James Dean in one of his final roles; he died one month before the release245.',

},
{
    id:24,
    name:'Wanted',
    category:'Hollywood',
    image:'https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbnLVLbmZvfzbr5XjE9z4lniQA5Od9JF9AR6YTDfjRQI_gujq7yTPw89Z8SpHLTpOas-fo-_DMW5EmN_GXzdrXKD8IUpknf9Yuo.jpg?r=0de',
    para:'After discovering his murdered father belonged to a secret guild of assassins, average guy Wesley hones his innate killer instincts and turns avenger..',
  
},
{
    id:25,
    name:'Citizen Kane',
    category:'Hollywood',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg/330px-Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg',
    para:"Citizen Kane is a 1941 American drama film directed by, produced by, and starring Orson Welles. He and Herman J. Mankiewicz wrote the screenplay. The picture was Welles' first feature film. Citizen Kane is frequently cited as the greatest film ever made.[5] For 50 consecutive years, it stood at number 1 in the British Film Institute's Sight & Sound decennial poll of critics, and it topped the American Film Institute's 100 Years ... 100 Movies list in 1998, as well as its 2007 update. The film was nominated for Academy Awards in nine categories and it won for Best Writing (Original Screenplay) by Mankiewicz and Welles. Citizen Kane is praised for Gregg Toland's cinematography, Robert Wise's editing, Bernard Herrmann's music, and its narrative structure, all of which have been considered innovative and precedent-setting.",    
},
{
    id:26,
    name:'Game of thrones',
    category:'Hollywood',
    image:'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    para:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. .[3][4] Studio executives had trouble finding a director; the first few candidates turned down the position before Coppola signed on to direct the film but disagreement followed over casting several characters, in particular, Vito (Marlon Brando) and Michael (Al Pacino). Filming took place primarily on location around New York City and in Sicily, and was completed ahead of schedule. The musical score was composed principally by Nino Rota, with additional pieces by Carmine Coppola.',
 
},
{
    id:27,
    name:'Jurassic World',
    category:'Hollywood',
    image:'data:image/jpeg;base64,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',
    para:'Jurassic World is a 2015 American science fiction action film directed by Colin Trevorrow, who co-wrote the screenplay with Rick Jaffa',
},
{
id:28,
name:'Toy Story',
category:'Hollywood',
image:'https://whatsondisneyplus.com/wp-content/uploads/2020/11/Toy-Story-Featured.png',
para:'Toy Story is a 1995 American animated comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures.',

},
{
id:29,
name:'ELYSIUM',
category:'Hollywood',
image:'https://tse3.mm.bing.net/th?id=OIP.t1FDNkj9uiKrknX46RXwBgHaFL&pid=Api&P=0&h=180',
para:'Elysium is a 2013 American dystopian science fiction action film written, produced, and directed by Neill Blomkamp. It was Blomkamps second directorial effort. The film stars Matt Damon and Jodie Foster alongside Sharlto Copley, Alice Braga, Diego Luna, Wagner Moura, and William Fichtner.[4] The film takes place on both a ravaged Earth and a luxurious artificial world (Stanford torus design) called Elysium.[5] The film itself offers deliberate social commentary that explores political and sociological themes such as immigration, overpopulation, transhumanism, health care, worker exploitation, the justice system, technology, and social class issues.',
error:"page is not found"

},
{
    id:30,
    name:'Vertigo',
    category:'Hollywood',
    image:'https://www.themoviedb.org/t/p/original/eBOkdNmCLFvBMiD5aLChkMoKZrz.jpg',
    para:'Vertigo is a 1958 American psychological thriller film directed and produced by Alfred Hitchcock.',
},

//Fitness
{
    id:31,
    category:'Fitness',
    name:'Pull Reducer Training Bands',
    image:'https://m.media-amazon.com/images/I/41B40V8NoTL.jpg',
    para:'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. Waist Reducer reduces your Waist and Strengthens Abdominal and Lower Back muscles.',
},
{
    id:32,
    name:'Cardio Gym Equipment',
    category:'Fitness',
    image:'https://www.health.com/thmb/KxeZT96kXigD11fjaV0iYPO2hMs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-GettyImages-1336700535-9ef0d2f2dc8d466aa7346d1bfd79aa98.jpg',
    para:'The “fat-burning zone” recommendations on commercial cardio equipment may be leading people astray, a new study finds.',
},
{
 id:33,
 name:'Hand Gripper',
 category:'Fitness',
 image:'https://m.media-amazon.com/images/I/71wUPlxplFL._SX679_.jpg',
 para:'ADJUSTABLE RESISTANCE: - You can easily and quickly adjust the resistance from 22lbs (10kg) to 88lbs (40kg) according to your need.',

},
{
  id:34,
  name:'Loop Hip Band',
  category:'Fitness',
  image:'https://m.media-amazon.com/images/I/61lwLaSu4fL._SX679_.jpg',
  para:'RESISTANCE BAND THAT ARE EASY TO USE : Made from latex. Comes in 5 different resistance strength levels & Multicolor X-Light, Light, Medium, Heavy and X-Heavy For Customized Workout These Loops Bands Are suitable for beginner or a seasoned workout sportsman',

},
{
   id:35,
   name: 'Gym Ball',
   category:'Fitness',
   image:'https://m.media-amazon.com/images/I/41hMH-9e7FL._SX300_SY300_QL70_FMwebp_.jpg',
   para:'ANTI BURST & SLOW DEFLATION - Our exercise ball is made with the fine structure which makes it deflate slowly and burst resistant if punctured, thus reducing the risks of injury due to falls to the ground and offering you the most caring protection. This anti burst gym ball, 55cm ball will provide broad base while doing workouts & will easily absorb heavy body weights is well.',

},
{
    id:36,
    name:'Jump Rope',
    category:'Fitness',
    image:'https://plus.unsplash.com/premium_photo-1664299555455-3e0a5542d3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEp1bXAlMjBSb3BlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    para:'Jumping rope requires very simple equipment: a jump rope, good shoes, and an impact-reducing surface. Most jump ropes cost under US$10 and can be found in sporting goods and many general merchandise stores. Jumping rope is a relatively high-impact fitness activity, making choosing the right shoes especially important. Shoes should be well padded and provide good arch support. Shoes designed for running or cross training are often a good choice. Jumping rope in bare feet is not recommended, as this can put a high amount of stress on the feet and ankles.',

},
{
    id:37,
    name:'Workout Gloves',
    category:'Fitness',
    image:'https://tse3.explicit.bing.net/th?id=OIP.1vWJ40OIVYb2FC6a8ahRCwHaHa&pid=Api&P=0&h=180',
    para:'The most common type of weightlifting gloves. They may provide more stability and support to the wrists and reduce calluses. Depending on the material, they may be less breathable..',
},
{
id:38,
name:'ab roller wheel',
category:'Fitness',
image:'https://m.media-amazon.com/images/I/61YF0B2RiUL._SX679_.jpg',
para:'Although there are many different forms of exercises for the roller wheel, the resistance of the band as well as the number of repetitions are the main variables used to lower or increase the intensity of the workout.In 2014, researchers found that the Bench Press and the resistance band Push-up, at similar stress levels, produced similar strength gains.',
},
{
    id:39,
    name:'Fitness Ball',
    category:'Fitness',
    image:'https://tse3.mm.bing.net/th?id=OIP.PCIOxxfjOlRny3BxXtViFwHaHa&pid=Api&P=0&h=180',
    para:'An exercise ball is a ball constructed of soft elastic, typically in 5 diameters of 10 cm increments, from 35 to 85 cm (14 to 33 in), and filled with air. The air pressure is changed by removing a valve stem and either filling with air or letting the ball deflate.',
},
{
  id:40,
  name:'Swimming',
  category:'Fitness',
  image:'https://tse1.mm.bing.net/th?id=OIP.NPVX0Pe6RQZzRUgLHa53AgHaE7&pid=Api&P=0&h=180',
  para:'Swimming is the self-propulsion of a person through water, or other liquid, usually for recreation, sport, exercise, or survival.',
},
{
    id:41,
    name:'Miles Per Hour ',
    category:'Fitness',
    image:'https://gethealthyu.com/wp-content/uploads/2022/04/tips-for-power-walking.png.webp',
    para:'On the other hand, power walking too slowly might only net you 100 calories or less for 30 minutes. Keep your speed and intensity up. Most fitness watches or trackers will tell you how far and how fast you are walking. This can be an invaluable tool to help you.',
    error:"page is not found"
    
   

},
{
id:42,
name:'Exercise Daily',
category:'Fitness',
image:'https://tse1.mm.bing.net/th?id=OIP.2kevX7t1TU5cQkBrxliFIQHaFs&pid=Api&P=0&h=180',
para:'Exercise daily for at least an hour. You do not have to kill yourself from running, jogging, etc., but you should have some sort of moderate physical activity in your everyday life. If youre looking to shed a few pounds fast, do a higher-level intensity workout. For example, go on a walk at a brisk pace for an hour. Or, you can jog and set certain intervals to sprint during that hour. Make sure you re not in severe pain during your workout. Just a warning, your muscles will ache after a high intensity workout. It may be irritating, but that means your body is changing for the better. Be sure to stay hydrated, stretch, and eat foods with a decent amount of protein after each workout. The protein will help keep your muscles, not fat, rebuilding.',
error:"page is not found"

},
{
    id:43,
    name:'Eat the Right Foods',
    category:'Fitness',
    image:'https://tse3.mm.bing.net/th?id=OIP.FD4dxY4lvjPb6OQ7ugogoAHaDQ&pid=Api&P=0&h=180',
    para:'No matter how bad your stomach is telling you to go for candy over healthy food, try to stay away from sweets. Sugar from candy will not help you get in shape. Even if its just a single candy bar, one will eventually lead to another. Fruits and vegetables are the best thing to eat when getting into shape. Apples, for example, do a good job at making the stomach feel full for up to 3 to 4 hours. Green vegetables such as green beans and broccoli keep the digestive system clean and running.',
    error:"page is not found"

},
{
    id:44,
    name:'Calories and Food',
    category:'Fitness',
    image:'https://www.inkin.com/blog/uploads/fb_insta.png',
    para:'Keeping track of how many calories you eat in a day will be helpful in planning out your physical exercising. Ever wonder why body builders  body masses are so big? Thats because they plan out their meals and take in more (healthy) calories than the average person. On the other hand, losing weight and striving for a skinnier physique will involve more physical exercise than calories you ingest',
    error:"page is not found"

},
{
    id:45,
    name:'Stay Motivated',
    category:'Fitness',
    image:'https://tse1.mm.bing.net/th?id=OIP.Nc9Bt6v-akSn-j2MO-jbmQHaEt&pid=Api&P=0&h=180',
    para:'An important key to being in shape is to set goals and keep a positive mindset. If you stay positive, you will be able to push yourself to get that fit body you ve always wanted.',
    error:"page is not found"

},

//Food
{
    id:46,
    name:'Yorkshire Patties',
    category:'Food',
    image:'https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09103300/Rectangle-1Yorkshire-Lamb-Patties-1.png?resize=515%2C291&ssl=1',
    para:'It will make your mouth swim to eat Yorkshire Lamb Patties, a delectable delicacy. Your weekend celebrations will be enjoyable as a result. With a crisp salad or mayonnaise dip, this delectable dish is served hot.',
},
{
    id:47,
    name:'Prawn Pie',
    category:'Food',
    image:'https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09103534/Rectangle-1Prawn-Pie.png?resize=515%2C291&ssl=1',
    para:'The creamy, delectable snack is known as “prawn pie.” The cheese-topped leek mash gives it the ideal amount of coziness. You should attempt this recipe because it is a traditional fish pie for the winter.',
},
{
    id:48,
    name:'Crispy Rings',
    category:'Food',
    image:'https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09104037/Rectangle-1Crispy-Calamari-Rings.png?resize=515%2C291&ssl=1',
    para:'The most popular seafood in the entire globe is crispy calamari rings. Anyone can cook this tasty snack because it is simple to do so. Like Olive Garden Chicken and Ultimate Meat Lasagne, this dish is typically served alongside Italian cuisine..',
},
{
   id:49,
   name:'Stuffed Potatoes',
   category:'Food',
   image:'https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09104347/Rectangle-1Stuffed-Jacket-Potatoes.png?resize=515%2C291&ssl=1',
   para:'The cheesy, spicy, and deliciousness of stuffed jacket potatoes. It is consumed as a robust lunch or a light meal. Served with the rich mushroom mixture are these filled potatoes.',
},
{
   id:50,
   name:'Pizza',
   category:'Food',
   image:'https://tse4.mm.bing.net/th?id=OIP.aJNxkymaTLFYmiptBKkQyQHaFE&pid=Api&P=0&h=180',
   para:'Pizza (English: /ˈpiːtsə/ PEET-sə, Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as various types of sausage, anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.',
},
{
   id:51,
   name:'Lamb Salad',
   category:'Food',
   image:'https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09104735/Rectangle-1Roast-Lamb-Salad.png?resize=515%2C291&ssl=1',
   para:'Wintertime is the perfect time to enjoy a warm, nutritious salad like roast lamb. A beautiful beginning is provided by the dish’s crispiness. Salted & pepper, rosemary, and lemon can all be added to the salad to improve the flavor..',

},
{
  id:52,
  name:'Noodles',
  category:'Food',
  image:'https://kirbiecravings.com/wp-content/uploads/2018/02/garlic-noodles-61.jpg',
  para:'Noodles are a type of food made from unleavened dough which is either rolled flat and cut, stretched, or extruded, into long strips or strings. ',
},
{
  id:53,
  name:'Butter Chicken',
  category:'Food',
  image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347425/india-food-dal-tadka/india-food-dal-tadka-1120x732.jpg',
  para:'A dish of tender chicken in a mildly spiced tomato sauce. It’s traditionally cooked in a tandoor (a cylindrical clay oven). The gravy is always made first by boiling down fresh tomato, garlic, and cardamom into a bright red pulp. This pulp is then pureed after cooling. Butter, various spices, and khoa (dried whole milk) is then added. The dish originated in Delhi during the 1950s.'  ,
  error:"page is not found"

},
{
    id:54,
    name:'Sticky Toffee',
    category:'Food',
    image:'https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09105105/Rectangle-1Sticky-Toffee-Pudding.png?resize=515%2C291&ssl=1',
    para:'Dates add a date-like sweetness to the dense cake that is baked into sticky toffee pudding. Served with a sticky sauce, it is a delicious sponge cake. With vanilla ice cream or custard, this meal is at its finest.',
},
{
   id:55,
   name:'Masala Dosa',
   category:'Food',
   image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347374/india-food-sambar/india-food-sambar-1120x732.jpg',
   para:'The traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and black lentils, which are ground into a paste and blended to create a thick batter, usually left to ferment overnight. The mixture is enriched with a handful of fenugreek seeds, which gives the dosa its distinctive golden-brown color and a delicious .',
  
},
{
    id:56,
    name:'Roesti and Salad',
    category:'Food',
    image:'https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09105716/Rectangle-1Roesti-and-Salad.png?resize=515%2C291&ssl=1',
    para:'A salad topping is placed on crispy potato cakes. On Sundays, everyone will enjoy cooking this sluggish brunch. You can have this dish with arugula & radicchio salad, toasted almonds, and red grapefruit.',
},
{
    id:57,
    name:'Dal Makhani',
    category:'Food',
    image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347439/india-food-chana-masala/india-food-chana-masala-1120x732.jpg',
    para:'Although it originated in Punjab, dal makhani has become a favorite Indian lentil dish all over the country. It consists of black beans or red kidney beans and whole black lentils, called ‘urad’. The dish is prepared with plenty of ghee and seasonings such as ginger, garlic paste, and chili, and it is slowly cooked in a rich, tomato-based sauce.The name makhani, meaning butter, is due to the addition of cream and a drizzle of melted ghee or butter that provides the typical velvety flavor of this classic.',
    

},

//Technology
{
   id:61,
   name:'DTDC',
   category:'Technology',
   image:'https://4.bp.blogspot.com/_JUw2aRvPUwc/S_ZPyroBYqI/AAAAAAAASfA/D1vQiyQiKHw/s1600/dtdc_inner.jpg',
   para:"In 2012, DTDC acquired a 52 percent stake in Eurostar Express of Eurostar Group in the UAE.[8] In April 2013, DTDC acquired 70% of Nikkos Logistics.[9] In June 2013, French courier company GeoPost (owned by La Poste) acquired a 39% stake in DTDC from Reliance Capital's private equity arm, taking its overall ownership in DTDC to 42%.",
   
},
{
    id:62,
    name:'Smart watch Apple',
    category:'Technology',
    para:'A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use.',
    image:'https://i5.walmartimages.com/asr/4951cfe5-b949-435c-a4aa-8aa918d0752b.5b459bbce6b3752b5875a697023e03c8.jpeg',
   
},
{
    id:63,
    name:'Android',
    category:'Technology',
    image:'https://tse2.mm.bing.net/th?id=OIP.f_QGqXSL1K-MtHFQYs8GBwHaEc&pid=Api&P=0&h=180',
    para:'Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.',
},
{
    id:64,
    name:'HP 250 G9',
    category:'Technology',
    image:'https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/7/M/7M659PA-1_T1683807084.png',
    para:'The latest evolutionary software and features in HP Products to better your experience, performance, businesses and to create positive change.',
},
{
    id:65,
    name:'Wearable plant sensors',
    image:'https://assets.weforum.org/editor/JB4YvBHaIVuTTgSimBNFgJj0sL51AIG2gmYqpCkZwhQ.jpg',
    category:'Technology',
    para:'Global food production will need to increase by 70% by 2050 to feed a growing world population, according to the United Nations Food and Agriculture Organization. Crop monitoring is a key part of achieving this goal..',

},
{
    id:66,
    name:"Puff of breath",
    category:'Technology',
    image:'https://assets.weforum.org/editor/wqDjwFB_eSFMFsP6O8u_-9hdNkYFoo5TBp01UzU3bTQ.PNG',
    para:'Soon, testing for disease could be as simple for patients as exhaling. New breath sensors can diagnose diseases by sampling the concentrations of the more than 800 compounds contained in human breath.',
},
{
    id:67,
    name:'Energy from wireless signals',
    category:'Technology',
    image:'https://assets.weforum.org/editor/NaEPlqq9u85yRMMyIHUu8CwLvZ342mK_A4_nIILhX4s.PNG',
    para:'The Internet of Things (IoT) is comprised of billions of electronic devices leveraging Internet connectivity for some aspect of their functionality. IoT sensors, often extremely low power devices that report data critical to our daily lives, are a challenge to keep charged, as batteries are of finite life and, once deployed, local environments often may not allow physical contact.',

},
{
    id:68,
    name:'Space technology',
    category:'Technology',
    image:'https://tse2.mm.bing.net/th?id=OIP.mcpXDbeuZQwvFcSNbZlPAgHaFj&pid=Api&P=0&h=180',
    para:'The Sustainable Development Goals (SDGs, or Global Goals), unanimously adopted at the United Nations in 2015, are a great summary of the world’s current challenges. Space is one of many important tools that can be used to help us address them.',
},

{
    id:69,
    name:'Revolutionizing Communication',
    category:'Technology',
    image:'https://47billion.com/wp-content/uploads/2020/08/5G-image.jpeg',
    para:'In telecommunications, 5G is the fifth-generation technology standard for cellular networks, which cellular phone companies began deploying worldwide in 2019, and is the successor to 4G technology that provides connectivity to most current mobile phones.',
 
},
{
    id:70,
    name:'Google Pixel',
    category:'Technology',
    image:'https://www.ephotozine.com/articles/google-pixel-5-smartphone-review-35063/images/highres-PA220065_1603364236.jpg',
    para:'Google Pixel is a brand of portable consumer electronic devices developed by Google that run either ChromeOS or the Android operating system.',
},
// {
//     id:71,
//     name:'Revolutionizing Battery Performance: UCLA Reveals True Shape of Lithium for the First Time',
//     category:'Technology',
//     image:'https://scitechdaily.com/images/Lithium-Metal-12-Sided-Figure.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1',
//     para:'UCLA researchers have made a groundbreaking discovery that could enhance the safety and efficiency of lithium-metal batteries. By preventing corrosion during the deposition of lithium, the researchers found that lithium atoms form a unique 12-sided shape, reducing the risk of explosions. This innovation could potentially revolutionize lithium battery technology, leading to improved safety and performance.',
//     error:"page is not found"
// },
{
    id:72,
    name:'Robotics',
    category:'Technology',
    image:'https://tse2.mm.bing.net/th?id=OIP.uTfBBQAED74kZ0CB8eldkAHaEc&pid=Api&P=0&h=180',
    para:'Robotics integrates many fields that deal with specific aspects of robotics. For example, within mechanical engineering.',
},
{
    id:73,
    name:'Artificial Intelligence”',
    category:'Technology',
    image:'https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-scaled.jpg',
    para:'Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of humans or animals.',
   
},
{
    id:74,
    name:'A Big Step Forward: New Breakthrough Could Lead to Cleaner Hydrogen Energy',
    category:'Technology',
    image:'https://tse2.mm.bing.net/th?id=OIP.50NxopzWfX25nkJn5K_3BAHaE3&pid=Api&P=0&h=180',
    para:'Wind power is the use of wind energy to generate useful work. Historically, wind power was used by sails, windmills and windpumps.',
   
},
{
    id:75,
    name:'Aircraft',
    category:'Technology',
    image:'https://techgenez.com/wp-content/uploads/2017/06/stratolaunch-airplane.jpg',
    para:'An aircraft in flight is free to rotate in three dimensions: yaw, nose left or right about an axis running up and down. ',
    
    // The collected data on human reactions to supersonic noise will potentially assist in enabling commercial supersonic flight over land.The following series of images shows NASA’s X-59 as it sits on the flight line—the space between the hangar and the runway—at Lockheed Martin Skunk Works in Palmdale, California, on June 19, 2023. The move from its construction site to the flight line is one of many milestones that prepare the X-59 for its first and subsequent flights. Next up, the team will conduct significant ground tests to ensure the aircraft is safe to fly.
},
{
    id:76,
    // name:'',
    image:"https://tse2.mm.bing.net/th?id=OIP.JQP912OvEIck9rlJc9_FygHaFj&pid=Api&P=0&h=180",
    // category:'',
    // para:''

},
{
    id:77,
    // name:'',
    image:'https://lifeboat.com/blog.images/artificial-intelligence-construction-technologys-next-frontier.jpg',
    // category:'',

},
{
    id:78,
    image:'https://tse4.mm.bing.net/th?id=OIP.0mmIoHqwyeUkQI_yqWGzDQHaE7&pid=Api&P=0&h=180',
    
},
]

);

return(
<Store.Provider value={[data, setdata]}>

{props.children}

{/* <BollyWood/> */}
{/* <HollyWood/> */}


</Store.Provider>
)

}
export default ContextStore;