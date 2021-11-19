//ALL PRODUCT INFO//

const products = [
  {
    Name: "Foxy Studs - Diamond",
    Price: 1345,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605105135_51.png",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/8/9/8907605105135_53.png",
    Description: "Our Foxy studs are all things contemporaray. These rose gold-toned sterling silver studs are given a sophisticated spin with intricately cut diamonds. These earrings inspired by this enchanted creature of the forest makes for a versatile everyday accessory for the girl on the go!",
     Quantity: 492,
    Ratings: 3.75,
    Category: "Accessories"
  },
  {
    Name: "Morning Chirps - Grey Pearl",
    Price: 1863,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605104985_51.png",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/8/9/8907605104985_53.png",
    Description: "Do you remember being in absolute awe of a flight of birds in the sky? This magical memory led us to create the Morning Chirps necklace. A delicate piece of jewellery, it showcases miniature birds lined up asymmetrically, creating an impression of movement, while a grey pearl adds gravitas and charm.",
     Quantity: 409,
    Ratings: 5,
    Category: "Accessories",
    Tag: "bestseller"
  },
  {
    Name: "Vivid Village Wrist Watch With Bracelet",
    Price: 2142,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605094026_top50.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605094026_plus25.jpg",
    Description: "Add a little quirk to your wrist & up your styling game with the Vivid Village Wrist Watch With Bracelet. The strap is made of Stainless Steel & dial is made from brass with glass encasing, this watch comes with a bracelet which is made of metal & glass beads.",
     Quantity: 392,
    Ratings: 4,
    Category: "Accessories",
    Tag: "bestseller"
  },
  {
    Name: "Stainless Steel Fascinating Flora Watch - Printed",
    Price: 1966,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605105906_plus11.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605105906_plus14.jpg",
    Description: "Noticed how florals can instantly elevate the look of almost anything? Being aligned with the same thought, Stainless Steel collection with vibrant dials designed by Indian Design Collective. Crafted with PU leather and powered by a quartz mechanism, this versatile & fascinating Flora black wristwatch is bound to lend a whimsical touch to your wrist. It is water-resistant for up to 3ATM.",
     Quantity: 446,
    Ratings: 4.7,
    Category: "Accessories",
    Tag: "bestseller"
  },
  {
    Name: "Flower Owl Printed Canvas Mini Backpack",
    Price: 2876,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605023453_top_5.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605023453_plus1_5.jpg",
    Description: "The Flower Owl Canvas Mini Backpack is built for the daily bustle. It comes with a roomy central compartment, two slip pockets an additional pocket in the front & comfortable padded back straps which can be converted into a single shoulder strap.",
     Quantity: 267,
    Ratings: 4.3,
    Category: "Accessories",
    Tag: "bestseller"
  },
  {
    Name: "Take The Scenic Route Laptop Sleeve - 15inch",
    Price: 1346,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605101717_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605101717_plus4.jpg",
    Description: "Make a statement at your office or in college with this bright and quirky ‘Take The Scenic Route Laptop Sleeve’ from Indian Design Collective. Designed with extra love to keep your laptop safe, this Laptop sleeve from Indian Design Collective is just like a pillow to the head, slim, soft and protecting it from any harm or danger. Now that you know that your laptop is in safe hands, secure and taken care of, you can move around effortlessly.",
     Quantity: 491,
    Ratings: 2.7,
    Category: "Accessories"
  },
  {
    Name: "Madhubani Design Clutch",
    Price: 2972,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074882_top.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074882_plus3.jpg",
    Description: "Explore the rustic Beauty of Madhubani Art, the Folk Painting of India with this lovely Madhubani Design Clutch. Made from PU and Poly canvas. This clutch has one main compartment and comes with a detachable sling.",
     Quantity: 550,
    Ratings: 4.2,
    Category: "Accessories",
    Tag: "bestseller"
  },
  {
    Name: "Live Slow Wallet - Large",
    Price: 1338,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605098260_top.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605098260_plus3.jpg",
    Description: "An original Indian Design Collective design, our Live Slow mini wallet is crafted in premium quality PU, which makes it durable for everyday use. The wallet is compact & easy to carry around! Made from polyurethane, it includes one main zipper, 6 card holders, 2 slip pockets, and 1 zip pocket. Pair it with our Live slow mini back pack & crossbody bag for the complete set",
     Quantity: 468,
    Ratings: 3.8,
    Category: "Accessories"
  },
  {
    Name: "Colorful Faces Of India Tote Bag",
    Price: 851,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8904218010818_top_5.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8904218010818_plus1_5.jpg",
    Description: "A little chaos and a lot of color is what the Colorful Faces Tote Bag is all about. Try on an interesting new look with this brand new tote bag.",
     Quantity: 498,
    Ratings: 4.9,
    Category: "Accessories",
    Tag: "bestseller"
  },
  {
    Name: "Flora Garden Navy Duffle Bag",
    Price: 2260,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605098826_main.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605098826_plus2.jpg",
    Description: "An Ideal companion for all your trips and day out,Flora Garden Navy Duffel Bag, is an absolute must-have in your accessory collection. Crafted from Polyester shell material and polyester lining fabric this duffel bag comes with floral print allover. This product is non-returnable.",
     Quantity: 598,
    Ratings: 3.2,
    Category: "Accessories"
  },
  {
    Name: "Tropical Flamingos iPhone 8 Case ",
    Price: 513,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605097720_top.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/800x450/8/9/8907605097720_plus2.jpg",
    Description: "This stunning tropical-themed iPhone case is perfect for when you're missing your last summer escapade. This sturdy case is made from TPU which gives your phone a slim fit and a soft bendable structure.",
     Quantity: 531,
    Ratings: 3.4,
    Category: "Accessories"
  },
  {
    Name: "Gemini Zodiac Necklace - Citrine, Diamond",
    Price: 1147,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104848_51.png",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104848_53.png",
    Description: "Star signs are the most exciting part of astrology and we decided to have some fun with it.Handcrafted in sterling silver and real gold plating our range of zodiac necklaces is a must have. Famous for being the most notorious of the bunch, the air sign of Gemini makes for a gorgeous pendant motif! The duality of Gemini is showcased brilliantly in a heart-shaped pendant with a citrine on one side and a diamond on the other. The brilliantly cut stones are complemented beautifully with the gold-toned sterling silver case and chain. Wear it long or short, but keep it close!",
     Quantity: 334,
    Ratings: 3.2,
    Category: "Accessories"
  },
  {
    Name: "Starry Starry Nights Necklace - Lapis Lazuli, Mother Of Pearl & Diamonds",
    Price: 1798,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104619_51.png",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104619_53.png",
    Description: "Our Celestial range of jewllery is a dreamy compilation of handcrafted pieces. The Starry Starry Nights necklace is no different, with its mother of pearl pendant encrusted with diamonds and a lapis lazuli sphere at the ends of the half-moon. The design evokes images of romance and whimsy and makes for a memorable gift. Include this understated yet elegant trinket in your repertoire, and you can wear it with everything in your wardrobe.",
     Quantity: 336,
    Ratings: 4.1,
    Category: "Accessories",
    Tag: "bestseller"
  },
  {
    Name: "Like A Flutterfly To A Flower Bracelet - Green Onyx & Pink Garnet",
    Price: 2851,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104572_611.png",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104572_53.png",
    Description: "We find magic in the smallest of beings, and butterflies are the most beautiful of them all. This butterfly motif gold-toned bracelet from Indian Design Collective is intricately placed green onyx and pink garnet. Perfect for an evening out or any special occasion.",
     Quantity: 568,
    Ratings: 4,
    Category: "Accessories",
    Tag: "bestseller"
  },
  {
    Name: "Bohemian Leaves Wrist Watch - Teal",
    Price: 2029,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605072185_top.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605072185_3_.jpg",
    Description: "Add a little quirk to your wrist with the Bohemian Leaves Wrist Watch. Made from PU strap & Brass dial, this watch has digital art print on the dial and comes in Indian Design Collective Tin Case.",
     Quantity: 498,
    Ratings: 5,
    Category: "Accessories",
    Tag: "bestseller"
  },
  {
    Name: "Pixie Feathers Watch & Bracelet Set Baby Pink",
    Price: 2312,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605036064_top50.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605036064_plus24.jpg",
    Description: "Our Bohemian inspired watch & bracelet set is perfect for everyday use or for a formal occasion. Pairs well with a feminine maxi or skater dress. It comes with a set of 3 stunning bracelets charms that makes it perfect for an evening look. This is an original Indian Design Collective-design, it comes with a PU strap and brass dial with Citizen 2035 movement. Our watches come in a joyful vintage tin packaging, perfect for gifting.",
     Quantity: 453,
    Ratings: 3.96,
    Category: "Accessories"
  },
  {
    Name: "Boho Tribal Backpack",
    Price: 1809,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/1/0/1000_x_1250_0019_layer_1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/1/0/1000_x_1250_0017_layer_3.jpg",
    Description: "This boho inspired backpack is an original tribal Indian Design Collective design. Perfect for packing essentials for work or leisure, it comes with a nylon and PU make and includes multiple compartments and zippers.",
     Quantity: 410,
    Ratings: 3.9,
    Category: "Accessories"
  },
  {
    Name: "Tribal Tattoo On My Neck Faux Planter - Grey",
    Price: 2,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107702_plus1.png",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107702_plus4.png",
    Description: "A contemporary take on the human form, this ceramic planter comes with a tribal design and the plant placed looks like the hair of the little man. It comes with a tuft of faux green that looks just right with it, but you can choose to change his hairstyle to what you like!",
     Quantity: 210,
    Ratings: 3.5,
    Category: "Decor"
  },
  {
    Name: "Boho Evil Eye Dream Catcher",
    Price: 1295,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108549_plus3.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108549_plus2.jpg",
    Description: "Bring in the positive vibes with our Boho Evil Eye Dream Catcher. This boho and feathery soft dream catcher is crafted with tassels and blends with eclectic home Decor which is sure to add good vibes to your home.",
     Quantity: 287,
    Ratings: 4.32,
    Category: "Decor",
    Tag: "bestseller"
  },
  {
    Name: "People Of India Figurines Gift Box - Set Of 6",
    Price: 1595,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107566_plus2.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107566_plus3.jpg",
    Description: "A caravan of travelers; a Pint-Sized Punjabi, an Itty-Bitty Bengali, a Teeny-Tiny Tamilian, a Pocket-Sized Goan, a Teensy Kashmiri and a Lilliput Rajasthani; intend to find a home in your house. Made from wood and an MDF Box, let these figurines start conversations and keep antsy guests company with their pronounced welcoming nature.",
     Quantity: 368,
    Ratings: 5,
    Category: "Decor",
    Tag: "bestseller"
  },
  {
    Name: "Mahal Wall Art",
    Price: 1595,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107146_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107146_plus2.jpg",
    Description: "Reminiscent of the calmness and serenity of the palace and forts, this Mahal Wall Art adds a winsome touch to your walls and leaves in awe of the magnificence of palaces. A perfect gift for the lover of archives, this beautiful framed art is made of MDF, PS Frame and has 8 clips.",
     Quantity: 358,
    Ratings: 2.5,
    Category: "Decor"
  },
  {
    Name: "Majestic Owl Memo Board",
    Price: 1595,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107054_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107054_plus3.jpg",
    Description: "Stay on top of things and conquer every challenge with our Majestic Owl Memo Board which lets you keep a tab on all your to-do things with elan. Made with MDF and PS Frame to ensure a top notch quality, this funky memo board is made with 8 clips and wall mounting hook to add a whimsical touch to your home.",
     Quantity: 550,
    Ratings: 3.75,
    Category: "Decor"
  },
  {
    Name: "Being A Royal Cat Wall Art",
    Price: 2276,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107085_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107085_plus2.jpg",
    Description: "Do up your space how this cat would do by incorporating this adorable Being a Royal Cat Wall Art from Indian Design Collective.This quirky wall mounted art is designed with Canvas and MDF is a worthy pick to reinvent the look of any corner of your house.",
     Quantity: 212,
    Ratings: 5,
    Category: "Decor",
    Tag: "bestseller"
  },
  {
    Name: "Sunrise Faux Planter - Yellow",
    Price: 2241,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605106095_plus1.png",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605106095_plus3.png",
    Description: "If you are the kind of plant parent who loves them but just can't keep them alive, we have come to your rescue! This Sunrise Faux Planter - Yellow from Indian Design Collective brings to you a tiny ceramic planter that looks just like the real deal. An original Indian Design Collective design, you can add this two-tone pot in white and yellow to your work station, kitchen cabinet or bathroom slabs for a sophisticated vibe.",
     Quantity: 223,
    Ratings: 4,
    Category: "Decor",
    Tag: "bestseller"
  },
  {
    Name: "Teal By Indian Design Collective | Scooting Around Wall Clock - Yellow Rim",
    Price: 1478,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605106347_top.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605106347_plus1.jpg",
    Description: "Our Scooting Around Wall clock is one of our favourites from the retro collection. Add this to your home office space for that perfect vintage vibe. This wall clock is a must have for all those who have a thing for the old world charm.",
     Quantity: 559,
    Ratings: 4.7,
    Category: "Decor",
    Tag: "bestseller"
  },
  {
    Name: "Cancun Vibes Monstera Motif String Lights",
    Price: 2700,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605105296_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605105296_plus3.jpg",
    Description: "Monstera is the insta-approved house plant of our times and we had to jump in on the trend. If you happen to be the anti-thesis of a plant parent, get these light strings from Indian Design Collective too add a dose of green and shine, without the nurturing. Add them to your balcony or use them as jungle themed party Decor, the possibilities are endless. They run on 2, AA batteries and thus rid you of the hassle of looking for a plug point to light up your spot.",
     Quantity: 273,
    Ratings: 4.3,
    Category: "Decor",
    Tag: "bestseller"
  },
  {
    Name: "Colour Bomb Rug",
    Price: 2175,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104381_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104381_plus2.jpg",
    Description: "Add a pop of colour in your home with this multi-coloured bohemian rug from Indian Design Collective. This rug has been crafted with recycled fabric and jute as a move towards sustainable practices, with a look and feel reminiscent of traditional dhurries made in the Kutch region of India.",
     Quantity: 257,
    Ratings: 2.7,
    Category: "Decor"
  },
  {
    Name: "Sanganer Ikat Hanging Planter - Medium",
    Price: 2327,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104145_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104145_plus4.jpg",
    Description: "Whether you live in a villa or a studio apartment, a hearty dose of green is a must in every home. Big city dwellers need to be smart with their space and Indian Design Collective has the perfect solution to keep their green thumbs thriving. An intelligent solution for optimizing space in balconies or windows, this hanging planter is ideal for small plants. Designed in fresh colours with a fun ikkat print, it will add a pop of colour to your indoor garden. Made from a rust free galvanized metal, it comes with a hole at the bottom for drainage and is perfect for small plants.",
     Quantity: 407,
    Ratings: 4.2,
    Category: "Decor",
    Tag: "bestseller"
  },
  {
    Name: "Elephant Carved Rectangle Planter With Legs - Cement - Red",
    Price: 1322,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605103889_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605103889_plus6.jpg",
    Description: "A contemporary take on the elephant, these pastel planters will take your green game up a notch! The perfect addition to your balcony, patio or porch, these planters are great for both indoor and outdoor spaces. Made from 100% cement they are durable and easy to clean. Disclaimer: This Planter has been handcrafted with love and may have slight irregularities that are a natural outcome due to human involvement in the manufacturing process. The porous cement pots helps absorb the water and dry out the soil. Minor pores, dents, marks and uneven finishing on the product will be there and are negligible. Our handcrafted designer planters, due to the difference between different monitor/screens, the product colour may vary marginally from the actual colour.",
     Quantity: 301,
    Ratings: 3.8,
    Category: "Decor"
  },
  {
    Name: "Flower Power Owl Tealight Holder",
    Price: 2713,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605103698_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605103698_plus6.jpg",
    Description: "Boho meets vintage in this extraordinary tealight holder. Fashioned from distressed finish iron, this original Indian Design Collective design has cutouts to let just the right amount of light shine through and create interesting shapes in your living space. The mighty owl with flowers for eyes and a colourful disposition adds quirk.",
     Quantity: 258,
    Ratings: 4.9,
    Category: "Decor",
    Tag: "bestseller"
  },
  {
    Name: "Rattan Bands Pink Vase",
    Price: 2478,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605100932_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605100932_plus3.jpg",
    Description: "Do up any corner in your living room or entry area with our Rattan Bands Pink Vase. A trending must have for all home Decor lovers this season, handcrafted in Vietnam our bohemian inspired bamboo vase with pops of pink is sure to amp up your space. Perfect for dry flower sticks, artificial plants or real flowers.",
     Quantity: 335,
    Ratings: 2.5,
    Category: "Decor"
  },
  {
    Name: "A Taste Of Nature 16 \" Cushion Covers - Set Of 5",
    Price: 1017,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605096990_top.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/800x450/8/9/8907605096990_plus4.jpg",
    Description: "Bring a sense of uniqueness to your house with A Taste of Nature Cushion Covers Set. Made from cotton, this set of 5 cushion cover is ideal for 16\" cushions & features screen print with embroidery.",
     Quantity: 393,
    Ratings: 3.4,
    Category: "Decor"
  },
  {
    Name: "Hooked On Home Key Holder",
    Price: 1864,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605079191_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605079191_plus2.jpg",
    Description: "The Hooked On Home Key Holder is perfect to organise and keep safe all your precious keys. Made from eco leather, MDF & jute, it comes with 4 holders & a hook making it easy to hang on the wall.",
     Quantity: 226,
    Ratings: 3.2,
    Category: "Decor"
  },
  {
    Name: "Indian Potpourri Wall Art",
    Price: 2692,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074646_top.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074646_plus1.jpg",
    Description: "A Indian Design Collective Original, Indian Potpourri Wallart depicts the diverse culture of India. Made from Canvas, MDF & PS Frame, add a rich yet pleasing and an ethnic feel to ceiling or wall of your living room.",
     Quantity: 283,
    Ratings: 4.1,
    Category: "Decor",
    Tag: "bestseller"
  },
  {
    Name: "Road Trippin - Dark Chocolate Matte Lipstick",
    Price: 561,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108150_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108150_plus2.jpg",
    Description: "Just how the road trip rejuvenates and soothes our mind, this Road Trippin - Dark Chocolate lip shade from Indian Design Collective is enriched with jojoba oil, avocado oil, and Shea butter that soothes and rejuvenates your lips while providing ultra-matte appeal and finish. Slide it on your lips on your next outing and you are sure to get noticed.",
    Ratings: 4,
    Category: "Beauty",
    Tag: "bestseller"
  },
  {
    Name: "Secret Santa - Red Creme Lipstick",
    Price: 922,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605107979_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/8/9/8907605107979_plus2.jpg",
    Description: "Bring on the merriness and jolly vibes of the Christmas season with this Secret Santa- Red lipstick from Indian Design Collective which is sure to give you boundless joy and glee. With a lightweight and smooth texture, it glides effortlessly on your lips giving you a high-impact red color and a gorgeous soft creme finish.",
     Quantity: 274,
    Ratings: 5,
    Category: "Beauty",
    Tag: "bestseller"
  },
  {
    Name: "Stay Cheeky Blush Kit",
    Price: 1494,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108532_plus11.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/8/9/8907605108532_plus12.jpg",
    Description: "Our new Stay Cheeky Blush Kit is super fun, fuss free, blends easily and is perfect for your daily use. This tireless trio of a blush, contour and highlighter that’s 100% Vegan, Cruelty Free & Paraben Free will make sure your cheeks stay peachy while you stay absolutely cheeky. It’s rich texture that’s smooth, lightweight and long lasting makes it perfect for your everyday ‘no make-up, makeup look’. The kit comes in a travel friendly size and is perfect to slip into your handbag while travelling or on the go!",
     Quantity: 337,
    Ratings: 3.96,
    Category: "Beauty"
  },
  {
    Name: "Ice Candy Glossy Nail Paint",
    Price: 974,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108495_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108495_plus2.jpg",
    Description: "For those days when you wish to make a statement without going overboard, this Ice Candy nail paint from Indian Design Collective is your perfect pick which offers a marvellous shine and keeps your nails looking luxurious.",
     Quantity: 583,
    Ratings: 3.9,
    Category: "Beauty"
  },
  {
    Name: "Lemon Lush Glossy Nail Paint",
    Price: 275,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108266_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108266_plus2.jpg",
    Description: "Vibrant and whimsical, this Lemon Lush Nail paint from Indian Design Collective is sure to coat your nails with heaps of charm for a peppy look. This dazzling shade offers a lustrous shine and glides on your nails like a dream.",
     Quantity: 513,
    Ratings: 2.34,
    Category: "Beauty"
  },
  {
    Name: "Bachelorette Party-Rose Red Crème Lipstick",
    Price: 1318,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108051_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108051_plus2.jpg",
    Description: "Incorporate this glamorous and ravishing Bachelorette Party-Rose Red lipstick from Indian Design Collective into your makeup assortment to experience a supreme luxe finish that will make you fall in love with it right at the first stroke. The care ingredients like jojoba oil, shea butter, and vitamin C provides utmost moisturization and rejuvenation to your lips and is sure to flatter one and all.",
     Quantity: 560,
    Ratings: 4.32,
    Category: "Beauty",
    Tag: "bestseller"
  },
  {
    Name: "Daily Hustle Eye Shadow Kit",
    Price: 1564,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605102042_plus11.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605102042_plus12.jpg",
    Description: "Our new Daily Hustle Eye shadow Kit is super fun, fuss free, blends easily and is perfect for your daily use. Our eye shadow range is 100% Vegan, Cruelty Free & Paraben Free. The Daily Hustle Eye Shadow kit is a mix of 6 metallic eye shadows in hues of pinks, corals and browns for a day to night look. The shades are high impact and long-lasting with a soft and smooth texture and rich pigmentation. The kit comes in a travel friendly size and is perfect to slip into your handbag while travelling or on the go!",
     Quantity: 388,
    Ratings: 5,
    Category: "Beauty",
    Tag: "bestseller"
  },
  {
    Name: "New And Improved 'The Brighter Side' Face Masks For Kids Of All Ages (Unisex) - Set Of 2",
    Price: 1032,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605101618_1_.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605101618_4_.jpg",
    Description: "Breathe easy and keep things colorful with the new and improved ‘The Brighter Side’ Face Mask! Its 3 layers and vibrant prints will make sure that you are as safe as you are stylish. The first layer is made from premium quality breathable cotton while the second third layers are made from melt-blown fabric and blended melange fabric respectively. Each mask come with adjustable ear loops, a flexible noseband, and a detachable neckband resistor making every mask a comfy addition to your day! Every combo comes with individual pouches for each mask and a larger pouch to keep all your masks in one place. This pack contains 2 face masks for kids. They are designed & made in India.",
     Quantity: 471,
    Ratings: 2.5,
    Category: "Beauty"
  },
  {
    Name: "Whiskey Sour Metallic Nail Paint",
    Price: 979,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108433_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108433_plus2.jpg",
    Description: "Add a stroke of this ravishing Whiskey Sour nail paint from Indian Design Collective to your nails which paints them luxuriously. The gleaming golden shade is bound to turn heads with its high-impact lustre and lasting polish.",
     Quantity: 382,
    Ratings: 3.75,
    Category: "Beauty"
  },
  {
    Name: "Island Getaway Eau De Parfum",
    Price: 451,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605093128_plus1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605093128_plus2.jpg",
    Description: "This travel-friendly fragrance is enriched with a fruity mandarin note combined with softer scents of lotus blossoms that instantly refresh you. The packaging is gorgeous, sturdy, and fits perfectly into your handbag.",
     Quantity: 451,
    Ratings: 5,
    Category: "Beauty",
    Tag: "bestseller"
  },
  {
    Name: "Orange Blossoms Candle Jar",
    Price: 1109,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605067440_1_.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605067440_2_.jpg",
    Description: "This zesty and fresh candle jar is almost like biting into a freshly baked pie! The ceramic holder paired with a wooden lid complements any home and instantly adds that pop of brightness.",
     Quantity: 519,
    Ratings: 4,
    Category: "Beauty",
    Tag: "bestseller"
  },
  {
    Name: "Shiny Happy Bright Candle- Red",
    Price: 479,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605067471_2_.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605067471_1_.jpg",
    Description: "Bring home the Shiny Happy Bright Candle today! Made from Glass, iron, and wax. It has a Bourbon Vanilla - Mixture of Vanilla, vetiver & burnt cocoa fragrance with a burn time up to 30 hours. This piece adds an instant shot of charm and elegance to any space. You can light it up and place it in corners of your home; there's no limit to how you can Decorate your home with this blossom Candle.",
     Quantity: 241,
    Ratings: 4.7,
    Category: "Beauty",
    Tag: "bestseller"
  },
  {
    Name: "Pink Rose Korean Facemask",
    Price: 622,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605075407_main_1.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605075407_plus1_1.jpg",
    Description: "Rosy cheeks and an even-tone face are a pull away. This Facemask is made in Korea & has rose extracts that help you maintain the balance of your skin and makes it glow. This facemask is suitable for all skin types, for single use only and against animal testing.",
     Quantity: 481,
    Ratings: 4.3,
    Category: "Beauty",
    Tag: "bestseller"
  },
  {
    Name: "The Brighter Side Face Mask – Eco-Friendly, Reusable & Washable- Family Set Of 3",
    Price: 999,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605101397_top.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605101397_plus5_1.jpg",
    Description: "In classic Indian Design Collective prints with a 3-layer triple particle filtration & absorbent system, ‘The Brighter Side’ fabric face masks are as safe as they are colourful. We have an Air vent with 2-way filter protection in our masks. This mask comes with a unique crown shape for the perfect fit and protects you from pollution, dust, fog and bacteria while giving you a fun and stylish look as you go about your daily tasks. This pack contains face masks for 2 Senior and 1 Junior kids. It comes with a pouch that is available in five colours - Red, Blue, Yellow, Teal and Olive (colour may vary). These masks are designed and made in India.",
     Quantity: 421,
    Ratings: 4.2,
    Category: "Beauty",
    Tag: "bestseller"
  },
  {
    Name: "Make-Me-Blush Kit",
    Price: 1499,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108525_plus11.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108525_plus12.jpg",
    Description: "Our new Make -me- Blush Kit is super fun, fuss free, blends easily and is perfect for an evening out. This tireless trio of a blush, contour and highlighter that’s 100% Vegan, Cruelty Free & Paraben Free will make sure your cheeks stay ‘swoon-worthy’. It’s rich texture that’s smooth, lightweight and long lasting makes it perfect for a formal evening or a date night. The kit comes in a travel friendly size and is perfect to slip into your handbag while travelling or on the go!",
     Quantity: 546,
    Ratings: 3.8,
    Category: "Beauty"
  },
  {
    Name: "Earthy Spell Eau De Parfum ' 15ml",
    Price: 1120,
    Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605056024_top_4.jpg",
    Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605056024_plus1_4.jpg",
    Description: "Our Earthy Spell perfume comes with fragrance notes of orange flowers, apples, plums and a scintillating base note of sandalwood. This perfume is made in India and packaged in a Chumbak designed box. A great addition to a Beauty hamper for a friend.",
     Quantity: 477,
    Ratings: 4.9,
    Category: "Beauty",
    Tag: "bestseller"
  }
]
export default products


// const products = [
//   {
//   Name: "Flower Power Owl Tealight Holder",
//   Price: 1541,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605103698_plus1.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605103698_plus6.jpg",
//   Description: "Boho meets vintage in this extraordinary tealight holder. Fashioned from distressed finish iron, this original Indian Design Collective design has cutouts to let just the right amount of light shine through and create interesting shapes in your living space. The mighty owl with flowers for eyes and a colourful disposition adds quirk.",
//    Quantity: 233,
//   Ratings: 4.9,
//   Category: "decor"
// },
// {
//   Name: "Sanganer Ikat Hanging Planter - Medium",
//   Price: 2234,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104145_plus1.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104145_plus4.jpg",
//   Description: "Whether you live in a villa or a studio apartment, a hearty dose of green is a must in every home. Big city dwellers need to be smart with their space and Indian Design Collective has the perfect solution to keep their green thumbs thriving. An intelligent solution for optimizing space in balconies or windows, this hanging planter is ideal for small plants. Designed in fresh colours with a fun ikkat print, it will add a pop of colour to your indoor garden. Made from a rust free galvanized metal, it comes with a hole at the bottom for drainage and is perfect for small plants.",
//    Quantity: 455,
//   Ratings: 4.2,
//   Category: "decor"
// },
// {
//   Name: "Indian Potpourri Wall Art",
//   Price: 2294,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074646_top.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074646_plus1.jpg",
//   Description: "A Indian Design Collective Original, Indian Potpourri Wallart depicts the diverse culture of India. Made from Canvas, MDF & PS Frame, add a rich yet pleasing and an ethnic feel to ceiling or wall of your living room.",
//    Quantity: 411,
//   Ratings: 4.1,
//   Category: "decor"
// },
// {
//   Name: "Earthy Spell Eau De Parfum ' 15ml",
//   Price: 1165,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605056024_top_4.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605056024_plus1_4.jpg",
//   Description: "Our Earthy Spell perfume comes with fragrance notes of orange flowers, apples, plums and a scintillating base note of sandalwood. This perfume is made in India and packaged in a Chumbak designed box. A great addition to a beauty hamper for a friend.",
//    Quantity: 256,
//   Ratings: 4.9,
//   Category: "beauty"
// },
// {
//   Name: "Stainless Steel Fascinating Flora Watch - Printed",
//   Price: 1357,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605105906_plus11.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605105906_plus14.jpg",
//   Description: "Noticed how florals can instantly elevate the look of almost anything? Being aligned with the same thought, Stainless Steel collection with vibrant dials designed by Indian Design Collective. Crafted with PU leather and powered by a quartz mechanism, this versatile & fascinating Flora black wristwatch is bound to lend a whimsical touch to your wrist. It is water-resistant for up to 3ATM.",
//    Quantity: 205,
//   Ratings: 4.7,
//   Category: "accessories"
// },
// {
//   Name: "Flower Owl Printed Canvas Mini Backpack",
//   Price: 2876,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605023453_top_5.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605023453_plus1_5.jpg",
//   Description: "The Flower Owl Canvas Mini Backpack is built for the daily bustle. It comes with a roomy central compartment, two slip pockets an additional pocket in the front & comfortable padded back straps which can be converted into a single shoulder strap.",
//    Quantity: 403,
//   Ratings: 4.3,
//   Category: "accessories"
// },
// {
//   Name: "Madhubani Design Clutch",
//   Price: 1027,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074882_top.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605074882_plus3.jpg",
//   Description: "Explore the rustic beauty of Madhubani Art, the Folk Painting of India with this lovely Madhubani Design Clutch. Made from PU and Poly canvas. This clutch has one main compartment and comes with a detachable sling.",
//    Quantity: 251,
//   Ratings: 4.2,
//   Category: "accessories"
// },
// {
//   Name: "Colorful Faces Of India Tote Bag",
//   Price: 851,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8904218010818_top_5.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8904218010818_plus1_5.jpg",
//   Description: "A little chaos and a lot of color is what the Colorful Faces Tote Bag is all about. Try on an interesting new look with this brand new tote bag.",
//    Quantity: 587,
//   Ratings: 4.9,
//   Category: "accessories"
// },
// {
//   Name: "Starry Starry Nights Necklace - Lapis Lazuli, Mother Of Pearl & Diamonds",
//   Price: 1798,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104619_51.png",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605104619_53.png",
//   Description: "Our Celestial range of jewllery is a dreamy compilation of handcrafted pieces. The Starry Starry Nights necklace is no different, with its mother of pearl pendant encrusted with diamonds and a lapis lazuli sphere at the ends of the half-moon. The design evokes images of romance and whimsy and makes for a memorable gift. Include this understated yet elegant trinket in your repertoire, and you can wear it with everything in your wardrobe.",
//    Quantity: 355,
//   Ratings: 4.1,
//   Category: "accessories"
// },
// {
//   Name: "Boho Evil Eye Dream Catcher",
//   Price: 1295,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108549_plus3.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108549_plus2.jpg",
//   Description: "Bring in the positive vibes with our Boho Evil Eye Dream Catcher. This boho and feathery soft dream catcher is crafted with tassels and blends with eclectic home decor which is sure to add good vibes to your home.",
//    Quantity: 574,
//   Ratings: 4.32,
//   Category: "decor"
// },
// {
//   Name: "Morning Chirps - Grey Pearl",
//   Price: 1765,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605104985_51.png",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/8/9/8907605104985_53.png",
//   Description: "Do you remember being in absolute awe of a flight of birds in the sky? This magical memory led us to create the Morning Chirps necklace. A delicate piece of jewellery, it showcases miniature birds lined up asymmetrically, creating an impression of movement, while a grey pearl adds gravitas and charm.",
//    Quantity: 274,
//   Ratings: 5,
//   Category: "accessories"
// },
// {
//   Name: "Bohemian Leaves Wrist Watch - Teal",
//   Price: 2358,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605072185_top.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605072185_3_.jpg",
//   Description: "Add a little quirk to your wrist with the Bohemian Leaves Wrist Watch. Made from PU strap & Brass dial, this watch has digital art print on the dial and comes in Indian Design Collective Tin Case.",
//    Quantity: 429,
//   Ratings: 5,
//   Category: "accessories"
// },
// {
//   Name: "Take The Scenic Route Laptop Sleeve - 15inch",
//   Price: 1346,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/8/9/8907605101717_plus1.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605101717_plus4.jpg",
//   Description: "Make a statement at your office or in college with this bright and quirky ‘Take The Scenic Route Laptop Sleeve’ from Indian Design Collective. Designed with extra love to keep your laptop safe, this Laptop sleeve from Indian Design Collective is just like a pillow to the head, slim, soft and protecting it from any harm or danger. Now that you know that your laptop is in safe hands, secure and taken care of, you can move around effortlessly.",
//    Quantity: 444,
//   Ratings: 2.7,
//   Category: "accessories"
// },
// {
//   Name: "Daily Hustle Eye Shadow Kit",
//   Price: 1564,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605102042_plus11.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605102042_plus12.jpg",
//   Description: "Our new Daily Hustle Eye shadow Kit is super fun, fuss free, blends easily and is perfect for your daily use. Our eye shadow range is 100% Vegan, Cruelty Free & Paraben Free. The Daily Hustle Eye Shadow kit is a mix of 6 metallic eye shadows in hues of pinks, corals and browns for a day to night look. The shades are high impact and long-lasting with a soft and smooth texture and rich pigmentation. The kit comes in a travel friendly size and is perfect to slip into your handbag while travelling or on the go!",
//    Quantity: 456,
//   Ratings: 5,
//   Category: "beauty"
// },
// {
//   Name: "Ice Candy Glossy Nail Paint",
//   Price: 993,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108495_plus1.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108495_plus2.jpg",
//   Description: "For those days when you wish to make a statement without going overboard, this Ice Candy nail paint from Indian Design Collective is your perfect pick which offers a marvellous shine and keeps your nails looking luxurious.",
//    Quantity: 357,
//   Ratings: 3.9,
//   Category: "beauty"
// },
// {
//   Name: "Bachelorette Party-Rose Red Crème Lipstick",
//   Price: 793,
//   Image_URL_1: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108051_plus1.jpg",
//   Image_URL_2: "https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605108051_plus2.jpg",
//   Description: "Incorporate this glamorous and ravishing Bachelorette Party-Rose Red lipstick from Indian Design Collective into your makeup assortment to experience a supreme luxe finish that will make you fall in love with it right at the first stroke. The care ingredients like jojoba oil, shea butter, and vitamin C provides utmost moisturization and rejuvenation to your lips and is sure to flatter one and all.",
//    Quantity: 527,
//   Ratings: 4.32,
//   Category: "beauty"
// }
// ]

// export default products