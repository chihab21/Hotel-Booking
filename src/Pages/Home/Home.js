import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our Exclusive Room Booking</h1>
        <p>Find your perfect room for a comfortable stay</p>
        <a href="/rooms" className="hero-button">Explore Rooms</a>
      </header>



       {/* About Section */}
       <section className="about-section">
        <h2>About Us</h2>
        <p>We are dedicated to providing top-notch hospitality services. Our rooms are designed to provide a comfortable and luxurious experience for all our guests, ensuring a memorable stay every time.</p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>24/7 Room Service</h3>
            <p>Our staff is available around the clock to meet all your needs and ensure a relaxing stay.</p>
          </div>
          <div className="service-card">
            <h3>Free Wi-Fi</h3>
            <p>Stay connected with complimentary high-speed Wi-Fi available in all rooms and public areas.</p>
          </div>
          <div className="service-card">
            <h3>Spa & Wellness</h3>
            <p>Indulge in a variety of spa treatments designed to rejuvenate your body and mind.</p>
          </div>
        </div>
      </section>
      
      <section className="rooms-section">
        <h2>Our Rooms</h2>
        <div className="rooms-gallery">
          <div className="room-card">
            <img src="https://th.bing.com/th/id/OIP.ETQpUS3wKll91XlggYSEJQHaE8?rs=1&pid=ImgDetMain" alt="Room 1" />
            <h3>Deluxe Suite</h3>
            <p>$150 per night</p>
            <a href="/book" className="book-button">Book Now</a>
          </div>
          <div className="room-card">
            <img src="https://th.bing.com/th/id/OIP.v_UBmjn0bvMT7YojN7ipbwHaEn?w=800&h=498&rs=1&pid=ImgDetMain" alt="Room 2" />
            <h3>Standard Room</h3>
            <p>$80 per night</p>
            <a href="/book" className="book-button">Book Now</a>
          </div>
          <div className="room-card">
            <img src="https://th.bing.com/th/id/OIP.I8G8xjBPrtAU3w6b5-qaBwHaFN?rs=1&pid=ImgDetMain" alt="Room 3" />
            <h3>Executive Suite</h3>
            <p>$300 per night</p>
            <a href="/book" className="book-button">Book Now</a>
          </div>
          <div className="room-card">
            <img src="https://th.bing.com/th/id/OIP.lzxTmkT_jAMrNnvuscBiEgHaE8?rs=1&pid=ImgDetMain" alt="Room 4" />
            <h3>Penthouse</h3>
            <p>$500 per night</p>
            <a href="/rooms" className="book-button">Book Now</a>
          </div>
        </div>
        <a href="/rooms" style={{marginTop:'40px'}} className="book-button">View More</a>

      </section>

      <footer className="footer">
        <p>&copy; 2024 Room Booking. All rights reserved.</p>
        <p>Follow us on:
          <a href="https://www.facebook.com">Facebook</a> | 
          <a href="https://www.twitter.com">Twitter</a> | 
          <a href="https://www.instagram.com">Instagram</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
