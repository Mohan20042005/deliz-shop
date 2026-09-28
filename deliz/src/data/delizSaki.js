// All business data lives here. Source: Deliz Saki's own Instagram posts/menus/Highlights supplied by the developer.
export const brand={
  name:'Deliz by Saki', tagline:'Sweetness in Every Bite', instagram:'https://www.instagram.com/deliz_saki',
  whatsapp:'', // [WhatsApp number] e.g. '91XXXXXXXXXX' — NOT verified, left blank
  phone:'', location:'Chennai', address:'', hours:'', // address/hours/phone: [not verified]
  story:"[Replace with Deliz Saki's official brand story]",
}
const P='/images/deliz-saki/products/'
// price:null = not shown on any supplied menu. Add e.g. price:120 when confirmed.
export const items=[
 {id:'mini-cookie',cat:'cookies',name:'Mini Cookie',desc:'Bite-sized cookies full of happiness.',img:P+'mini-cookie.webp'},
 {id:'cookie-pie',cat:'cookies',name:'Cookie Pie',desc:'Soft, chewy and loaded with love.',img:P+'cookie-pie.webp'},
 {id:'scoop-milk',cat:'cookies',name:'Scoop Cookie with Milk Chocolate',desc:'Soft cookie dough loaded with milk chocolate.',img:P+'scoop-milk.webp'},
 {id:'scoop-nutella',cat:'cookies',name:'Scoop Cookie with Nutella',desc:'Soft cookie dough with creamy Nutella.',img:P+'scoop-nutella.webp'},
 {id:'cookie-fries',cat:'cookies',name:'Cookie Fries',desc:'Crispy, golden cookie sticks made for dipping & sharing.',img:P+'cookie-fries.webp'},
 {id:'single-cookie',cat:'cookies',name:'Single Cookie',desc:'A classic cookie, just for you.',img:P+'single-cookie.webp'},
 {id:'fudge-brownie',cat:'brownies',name:'Fudge Brownie',desc:'Rich, fudgy and oh-so-chocolaty.',img:P+'fudge-brownie.webp'},
 {id:'nutella-brownie',cat:'brownies',name:'Nutella Brownie',desc:'Fudgy brownie with creamy Nutella.',img:P+'nutella-brownie.webp'},
 {id:'brookie',cat:'brownies',name:'Brookie',desc:'The perfect combo of cookie & brownie.',img:P+'brookie.webp'},
 {id:'single-brownie',cat:'brownies',name:'Single Brownie',desc:'Perfect single treat for brownie lovers.',img:P+'single-brownie.webp'},
 {id:'millet-brookie',cat:'millet',name:'Millet Brookie',desc:'Fudgy Ragi Brownie × Crunchy Jowar Cookie. New.',img:P+'millet-brookie.webp'},
 {id:'ragi-classic',cat:'millet',name:'Classic Ragi Cookie',desc:'Simple, wholesome, and perfect with your evening tea.',img:P+'ragi.webp'},
 {id:'ragi-chocolate',cat:'millet',name:'Chocolate Ragi Cookie',desc:'Rich chocolate flavor blended with the goodness of ragi.',img:P+'ragi.webp'},
 {id:'ragi-almond',cat:'millet',name:'Almond Ragi Cookie',desc:'Crunchy, nutty goodness topped with roasted almonds.',img:P+'ragi.webp'},
 {id:'jowar-classic',cat:'millet',name:'Classic Jowar Cookie',desc:'Simple, comforting, and naturally delicious.',img:P+'jowar.webp'},
 {id:'jowar-chocolate',cat:'millet',name:'Chocolate Jowar Cookie',desc:'Rich chocolate flavor blended with wholesome jowar.',img:P+'jowar.webp'},
 {id:'jowar-almond',cat:'millet',name:'Almond Jowar Cookie',desc:'Crunchy, nutty goodness topped with roasted almonds.',img:P+'jowar.webp'},
]
export const cats=[['all','All'],['cookies','Cookies & Specials'],['brownies','Brownies & Specials'],['millet','Millet & Wholesome']]
const G='/images/deliz-saki/posts/'
export const gallery=[
 {src:G+'brownie-bulk.webp',alt:'Brownie cake pieces, bulk orders available'},
 {src:G+'brookie-post.webp',alt:'Millet Brookie'},
 {src:G+'tubs.webp',alt:'Mini Cookie, Mini Brownie and Ragi & Jowar cookie tubs'},
 {src:G+'ragi.webp',alt:'Ragi Cookies'},
 {src:G+'bikis.webp',alt:'Milk Bikis with Jaggery'},
 {src:G+'jowar.webp',alt:'Jowar Cookies'},
]
// Verbatim text from Feedback Highlight screenshots. No names shown.
export const feedback=[
 'It’s my first time having a Nutella brownie, and it was seriously amazing—such an awesome taste!',
 'Hands down the best brownies I’ve had in a long time! Both flavors were 10/10. The texture was spot on—so gooey and rich. You’re doing a fantastic job, and I can’t wait to see you reach great heights!',
 'Hi sis all your desserts were so good iam trying scoop cookie for the 1st time it was gooey nd choolaty tq so much for the wonderful dessert delight',
]
export const occasions=['Weddings','Birthdays','Parties & Functions','Return Gifts & Corporate Orders']
