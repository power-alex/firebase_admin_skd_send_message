// run `node index.js` in the terminal

const titles = ['title01', 'title02', 'title03', 'title04', 'title05'];
const msgs = ['msg01', 'msg02', 'msg03', 'msg04', 'msg05'];
const imgs = [
  'https://appstrackers.net/landers/icons/icon1.png',
  'https://appstrackers.net/landers/icons/icon2.png',
  'https://appstrackers.net/landers/icons/icon3.png',
  'https://appstrackers.net/landers/icons/icon4.png',
  'https://appstrackers.net/landers/icons/icon5.png',
  'https://appstrackers.net/landers/icons/icon6.png',
  'https://appstrackers.net/landers/icons/icon7.png',
  'https://appstrackers.net/landers/icons/icon8.png',
  'https://appstrackers.net/landers/icons/icon9.png',
  'https://appstrackers.net/landers/icons/icon10.png',
  'https://appstrackers.net/landers/icons/icon11.png',
  'https://appstrackers.net/landers/icons/icon12.png',
  'https://appstrackers.net/landers/icons/icon13.png',
  'https://appstrackers.net/landers/icons/icon14.png',
  'https://appstrackers.net/landers/icons/icon15.png',
  'https://appstrackers.net/landers/icons/icon16.png',
  'https://appstrackers.net/landers/icons/icon17.png',
];

function formAndSend(topicName) {
  console.log('topic name = ', topicName);

  var titleIndex = Math.floor(Math.random() * titles.length);
  var title = titles[titleIndex];
  console.log('title: ', titleIndex, ' ', title);

  var msgIndex = Math.floor(Math.random() * msgs.length);
  var msg = msgs[msgIndex];
  console.log('msg: ', msgIndex, ' ', msg);

  var imgIndex = Math.floor(Math.random() * imgs.length);
  var img = imgs[imgIndex];
  console.log('img: ', imgIndex, ' ', img);

  const message = {
    topic: topicName,
    android: {
      notification: {
        titleLocKey: title,
        bodyLocKey: msg,
        icon: 'ic_notification_warning',
        imageUrl: img,
      },
      data: {
        function: 'JunkCleaner',
      },
    },
  };
}

formAndSend('estPlus07');
