const products = [
  {
  _id: 1,
  Name: "Flower Power Owl Tealight Holder",
  Price: 1541,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605103698_plus1.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605103698_plus6.jpg",
  Description: "Boho meets vintage in this extraordinary tealight holder. Fashioned from distressed finish iron, this original Indian Design Collective design has cutouts to let just the right amount of light shine through and create interesting shapes in your living space. The mighty owl with flowers for eyes and a colourful disposition adds quirk.",
  Quantity: 233,
  Ratings: 4.9,
  Category: "Decor"
},
{
  _id: 2,
  Name: "Sanganer Ikat Hanging Planter - Medium",
  Price: 2234,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104145_plus1.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104145_plus4.jpg",
  Description: "Whether you live in a villa or a studio apartment, a hearty dose of green is a must in every home. Big city dwellers need to be smart with their space and Indian Design Collective has the perfect solution to keep their green thumbs thriving. An intelligent solution for optimizing space in balconies or windows, this hanging planter is ideal for small plants. Designed in fresh colours with a fun ikkat print, it will add a pop of colour to your indoor garden. Made from a rust free galvanized metal, it comes with a hole at the bottom for drainage and is perfect for small plants.",
  Quantity: 455,
  Ratings: 4.2,
  Category: "Decor"
},
{
  _id: 3,
  Name: "Indian Potpourri Wall Art",
  Price: 2294,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074646_top.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074646_plus1.jpg",
  Description: "A Indian Design Collective Original, Indian Potpourri Wallart depicts the diverse culture of India. Made from Canvas, MDF & PS Frame, add a rich yet pleasing and an ethnic feel to ceiling or wall of your living room.",
  Quantity: 411,
  Ratings: 4.1,
  Category: "Decor"
},
{
  _id: 4,
  Name: "Earthy Spell Eau De Parfum ' 15ml",
  Price: 1165,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605056024_top_4.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605056024_plus1_4.jpg",
  Description: "Our Earthy Spell perfume comes with fragrance notes of orange flowers, apples, plums and a scintillating base note of sandalwood. This perfume is made in India and packaged in a Chumbak designed box. A great addition to a beauty hamper for a friend.",
  Quantity: 256,
  Ratings: 4.9,
  Category: "Beauty"
},
{
  _id: 5,
  Name: "Stainless Steel Fascinating Flora Watch - Printed",
  Price: 1357,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605105906_plus11.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605105906_plus14.jpg",
  Description: "Noticed how florals can instantly elevate the look of almost anything? Being aligned with the same thought, Stainless Steel collection with vibrant dials designed by Indian Design Collective. Crafted with PU leather and powered by a quartz mechanism, this versatile & fascinating Flora black wristwatch is bound to lend a whimsical touch to your wrist. It is water-resistant for up to 3ATM.",
   Quantity: 205,
  Ratings: 4.7,
  Category: "Accessories"
},
{
  _id: 6,
  Name: "Flower Owl Printed Canvas Mini Backpack",
  Price: 2876,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605023453_top_5.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605023453_plus1_5.jpg",
  Description: "The Flower Owl Canvas Mini Backpack is built for the daily bustle. It comes with a roomy central compartment, two slip pockets an additional pocket in the front & comfortable padded back straps which can be converted into a single shoulder strap.",
   Quantity: 403,
  Ratings: 4.3,
  Category: "Accessories"
},
{
  _id: 7,
  Name: "Madhubani Design Clutch",
  Price: 1027,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074882_top.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074882_plus3.jpg",
  Description: "Explore the rustic beauty of Madhubani Art, the Folk Painting of India with this lovely Madhubani Design Clutch. Made from PU and Poly canvas. This clutch has one main compartment and comes with a detachable sling.",
   Quantity: 251,
  Ratings: 4.2,
  Category: "Accessories"
},
{
  _id: 8,
  Name: "Colorful Faces Of India Tote Bag",
  Price: 851,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8904218010818_top_5.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8904218010818_plus1_5.jpg",
  Description: "A little chaos and a lot of color is what the Colorful Faces Tote Bag is all about. Try on an interesting new look with this brand new tote bag.",
   Quantity: 587,
  Ratings: 4.9,
  Category: "Accessories"
},
{
  _id: 9,
  Name: "Starry Starry Nights Necklace - Lapis Lazuli, Mother Of Pearl & Diamonds",
  Price: 1798,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104619_51.png",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104619_53.png",
  Description: "Our Celestial range of jewllery is a dreamy compilation of handcrafted pieces. The Starry Starry Nights necklace is no different, with its mother of pearl pendant encrusted with diamonds and a lapis lazuli sphere at the ends of the half-moon. The design evokes images of romance and whimsy and makes for a memorable gift. Include this understated yet elegant trinket in your repertoire, and you can wear it with everything in your wardrobe.",
   Quantity: 355,
  Ratings: 4.1,
  Category: "Accessories"
},
{
  _id: 10,
  Name: "Boho Evil Eye Dream Catcher",
  Price: 1295,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108549_plus3.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108549_plus2.jpg",
  Description: "Bring in the positive vibes with our Boho Evil Eye Dream Catcher. This boho and feathery soft dream catcher is crafted with tassels and blends with eclectic home decor which is sure to add good vibes to your home.",
   Quantity: 574,
  Ratings: 4.32,
  Category: "Decor"
},
{
  _id: 11,
  Name: "Morning Chirps - Grey Pearl",
  Price: 1765,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605104985_51.png",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/8/9/8907605104985_53.png",
  Description: "Do you remember being in absolute awe of a flight of birds in the sky? This magical memory led us to create the Morning Chirps necklace. A delicate piece of jewellery, it showcases miniature birds lined up asymmetrically, creating an impression of movement, while a grey pearl adds gravitas and charm.",
   Quantity: 274,
  Ratings: 5,
  Category: "Accessories"
},
{
  _id: 12,
  Name: "Bohemian Leaves Wrist Watch - Teal",
  Price: 2358,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605072185_top.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605072185_3_.jpg",
  Description: "Add a little quirk to your wrist with the Bohemian Leaves Wrist Watch. Made from PU strap & Brass dial, this watch has digital art print on the dial and comes in Indian Design Collective Tin Case.",
   Quantity: 429,
  Ratings: 5,
  Category: "Accessories"
},
{
  _id: 13,
  Name: "Take The Scenic Route Laptop Sleeve - 15inch",
  Price: 1346,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605101717_plus1.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605101717_plus4.jpg",
  Description: "Make a statement at your office or in college with this bright and quirky ‘Take The Scenic Route Laptop Sleeve’ from Indian Design Collective. Designed with extra love to keep your laptop safe, this Laptop sleeve from Indian Design Collective is just like a pillow to the head, slim, soft and protecting it from any harm or danger. Now that you know that your laptop is in safe hands, secure and taken care of, you can move around effortlessly.",
   Quantity: 444,
  Ratings: 2.7,
  Category: "Accessories"
},
{
  _id: 14,
  Name: "Daily Hustle Eye Shadow Kit",
  Price: 1564,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605102042_plus11.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605102042_plus12.jpg",
  Description: "Our new Daily Hustle Eye shadow Kit is super fun, fuss free, blends easily and is perfect for your daily use. Our eye shadow range is 100% Vegan, Cruelty Free & Paraben Free. The Daily Hustle Eye Shadow kit is a mix of 6 metallic eye shadows in hues of pinks, corals and browns for a day to night look. The shades are high impact and long-lasting with a soft and smooth texture and rich pigmentation. The kit comes in a travel friendly size and is perfect to slip into your handbag while travelling or on the go!",
   Quantity: 456,
  Ratings: 5,
  Category: "Beauty"
},
{
  _id: 15,
  Name: "Ice Candy Glossy Nail Paint",
  Price: 993,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108495_plus1.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108495_plus2.jpg",
  Description: "For those days when you wish to make a statement without going overboard, this Ice Candy nail paint from Indian Design Collective is your perfect pick which offers a marvellous shine and keeps your nails looking luxurious.",
   Quantity: 357,
  Ratings: 3.9,
  Category: "Beauty"
},
{
  _id: 16,
  Name: "Bachelorette Party-Rose Red Crème Lipstick",
  Price: 793,
  Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108051_plus1.jpg",
  Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108051_plus2.jpg",
  Description: "Incorporate this glamorous and ravishing Bachelorette Party-Rose Red lipstick from Indian Design Collective into your makeup assortment to experience a supreme luxe finish that will make you fall in love with it right at the first stroke. The care ingredients like jojoba oil, shea butter, and vitamin C provides utmost moisturization and rejuvenation to your lips and is sure to flatter one and all.",
   Quantity: 527,
  Ratings: 4.32,
  Category: "Beauty"
}
]
export default products
