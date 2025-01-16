import './App.css';

function Header() {
  return (
    <header className='header' id='header'>
      <img src='images/logo.png' alt='Logo' height={80} width={80} />
      <ul>
        <a href='#header'><li>Home</li></a>
        <a href='#aboutbox'><li>About</li></a>
        <a href='#menu'><li>Menu</li></a>
        <a href='#service'><li>Service</li></a>
        <a href='#contact'><li>Contact</li></a>
      </ul>
    </header>
  );
}

function Top() {
  return (
    <div className='hero'>
      <img src='images/hero.png' alt='hero' />
    </div>
  );
}

function About() {
  return (
    <div className='aboutbox' id='aboutbox'>
      <h1>About Us</h1>
      <div className='aboutImg'></div>
      <div className='aboutText'>
        <p>
          Since 2017, Pizza King has been the undisputed crown bearer of Kanpur Nagar’s pizza scene. Tucked away in the bustling heart of the city, this haven for pizza lovers has been serving up a delightful array of handcrafted pizzas that never fail to tantalize the taste buds.
          <br /><br />
          From its humble beginnings, Pizza King quickly became a favorite spot for locals and visitors alike, thanks to its commitment to quality and authentic flavors. Their menu is a harmonious blend of classic Italian recipes and innovative creations that cater to a wide range of palates. Whether you crave the traditional Margherita, a loaded Meat Lover’s, or something more adventurous like their Paneer Tikka pizza, every bite is a testament to their culinary expertise.
          <br /><br />
          Pizza King’s cozy ambiance, coupled with friendly service, makes it an ideal spot for families, friends, and solo diners. The vibrant atmosphere, adorned with quirky decor, adds to the overall charm of the place. Over the years, Pizza King has also embraced modern technology, offering seamless online ordering and delivery services to ensure that their delicious pizzas can be enjoyed from the comfort of home.
          <br /><br />
          As Pizza King continues to grow, it remains committed to bringing the best of pizza culture to Kanpur Nagar, one slice at a time. 🍕
        </p>
      </div>
    </div>
  );
}

const pizzaData = [
  {
    name: "Chilli Mushroom Pizza",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 100,
    photoName: "images/chilli-mushroom.jpg",
    soldOut: false,
  },
  {
    name: "Margherita Pizza",
    ingredients: "Tomato and mozarella, ham, aragula, and burrata cheese",
    price: 140,
    photoName: "images/margrita.jpeg",
    soldOut: false,
  },
  {
    name: "Cheese Pizza",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 125,
    photoName: "images/cheese.jpg",
    soldOut: false,
  },
  {
    name: "Keema Paneer Pizza",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 125,
    photoName: "images/keema-paneer-pizza-1.png",
    soldOut: false,
  },
  {
    name: "Chilli Sweetcorm Pizza",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 150,
    photoName: "images/chilli-sweetcorn-1.jpg",
    soldOut: true,
  },
  {
    name: "Kullhad Pizza",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 180,
    photoName: "images/kulhad.png",
    soldOut: false,
  },
  {
    name: "Paneer Tikka Pizza",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 150,
    photoName: "images/paneer-tikka-2.jpg",
    soldOut: true,
  },
  {
    name: "Corn Pizza",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 160,
    photoName: "images/corn.png",
    soldOut: false,
  },
];

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu" id='menu'>
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. creative dishes🍕 to choose from our store🏪
        oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {numPizzas && pizzas.map((pizza) => (
          <Pizza key={pizza.name} pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
}



function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props.pizzaObj;
  const itemStyle = {
    color: soldOut ? 'gray' : 'black',
  };
  const buttonStyle = { 
    backgroundColor: soldOut ? 'red' : '#edc84b', 
    color: soldOut ? 'white' : 'black', 
  };
  return (
    <li className="pizza" style={itemStyle}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <button style={buttonStyle}>{soldOut ? 'Sold Out' : `$${price}`}</button>
      </div>
    </li>
  );
}

const servicesData =[
  {
  serviceName : 'Best Staff' ,
  description : 'Pizza King’s staff are passionate about quality and customer satisfaction. Their expertise and friendly service create a welcoming atmosphere, ensuring every pizza is crafted to perfection and every dining experience is exceptional. 🍕' ,
  image : 'images/staff.jpg',
  },
  {
  serviceName : 'Best Sheff' ,
  description : 'Our best chef at Pizza King is a culinary maestro, blending innovation with tradition. Their dedication to crafting exquisite, authentic dishes ensures every pizza is a work of art, delighting customers with every bite.' ,
  image : 'images/sheff.jpg',
  },
  {
  serviceName : 'Home Delivery' ,
  description : 'Pizza King home delivery service brings delicious, handcrafted pizzas right to your doorstep. Enjoy seamless online ordering, timely delivery, and the same quality and freshness you experience dining in, all from the comfort of your home.' ,
  image : 'images/delivery.jpg',
  },
  {
  serviceName : 'Clean Environment' ,
  description : 'Pizza King ensures a clean, hygienic environment for every guest. Our commitment to cleanliness and sanitation creates a safe and pleasant dining experience, allowing you to enjoy our delicious pizzas in a spotless, welcoming atmosphere.' ,
  image : 'images/shop.jpg',
  },
  {
  serviceName : 'Special Events' ,
  description : 'Pizza King hosts special events like pizza-making workshops, birthday parties, and themed nights. These events create a fun and engaging atmosphere, allowing customers to enjoy unique experiences while savoring delicious, handcrafted pizzas.' ,
  image : 'images/event.jpg',
  },
  {
  serviceName : 'Family-Friendly Environment' ,
  description : 'Pizza King offers a family-friendly environment with kid-friendly menu options and activities. Families can enjoy a welcoming atmosphere, making it an ideal spot for meals with loved ones.' ,
  image : 'images/family.jpg',
  },
  {
  serviceName : 'Promotional Deals' ,
  description : 'Pizza King offers attractive promotional deals to delight their customers. From discounted combo meals to loyalty rewards, and special offers during festivals and events, they ensure great value while enjoying delicious handcrafted pizzas.' ,
  image : 'images/deal.jpg',
  },
  {
  serviceName : 'Online Ordering' ,
  description : 'Pizza King offers seamless online ordering for a convenient and hassle-free experience. Enjoy the ease of browsing the menu, customizing your order, and having your favorite handcrafted pizzas delivered straight to your doorstep with just a few clicks.' ,
  image : 'images/online.jpg',
  },

];

function OurService(){
  const services = servicesData;
  const numService = servicesData.length; 
  return(
    <div className='OurService' id='service'>
      <h1>Our Services</h1>
      <p>Pizza King offers handcrafted pizzas, cozy dining, friendly service, and seamless online ordering and delivery for an exceptional experience.</p>
      <ul className='services'>
        {numService && services.map((service) => (
          <Service key={service.serviceName} serviceObj={service} />
        ))}
      </ul>
    </div>
  );
}

function Service(props) {
  const { serviceName, description, image } = props.serviceObj;
  return (
    <li className='service'>
      <img src={image} alt={serviceName} />
      <div>
        <h2>{serviceName}</h2>
        <p>{description}</p>
      </div>
    </li>
  );
}

function Contact() {
  return(
    <div className='contact' id='contact' >
      <h1>Contact Us</h1>
      <form>
        <input type='text' placeholder='Enter First Name' />
        <input type='text' placeholder='Enter Last Name' />
        <input type='number' placeholder='Enter Mobile Number' />
        <input type='email' placeholder='Enter Email' />
        <textarea className='textarea' placeholder='Enter Address'></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}



function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src='images/logo.png' alt='logo' height={100} width={100} />
      </div>
      <div className='footer-links'>
        <ul>
          <li><a href='#weebly-themes'>Weebly Themes</a></li>
          <li><a href='#pre-sale-faqs'>Pre-Sale FAQs</a></li>
          <li><a href='#submit-ticket'>Submit a Ticket</a></li>
        </ul>
        <ul>
          <li><a href='#services'>Services</a></li>
          <li><a href='#theme-tweak'>Theme Tweak</a></li>
        </ul>
        <ul>
          <li><a href='#showcase'>Showcase</a></li>
          <li><a href='#widgetkit'>Widgetkit</a></li>
          <li><a href='#support'>Support</a></li>
        </ul>
        <ul>
          <li><a href='#about-us'>About Us</a></li>
          <li><a href='#contact-us'>Contact Us</a></li>
          <li><a href='#affiliates'>Affiliates</a></li>
          <li><a href='#resources'>Resources</a></li>
        </ul>
      </div>
      <div className='footer-social'>
        <a href='#facebook'><i className="fa-brands fa-facebook"></i></a>
        <a href='#twitter'><i className='fa fa-twitter'></i></a>
        <a href='#rss'><i className='fa fa-rss'></i></a>
        <a href='#google-plus'><i className='fa fa-google-plus'></i></a>
        <a href='#flickr'><i className='fa fa-flickr'></i></a>
      </div>
      <p>&copy; Copyright. All rights reserved.</p>
    </footer>
  );
}



function App() {
  return (
    <div className="container">
      <Header />
      <Top />
      <About />
      <Menu />
      <OurService />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
