import React from "react";
import ReactDOM from "react-dom/client";

const img3 = "https://th.bing.com/th/id/R.13c8c9c74f34b27e0858e8accb004507?rik=p1ppWjdyCPaU1A&riu=http%3a%2f%2fmedia.architecturaldigest.com%2fphotos%2f57f50f25c23fd94674c570d0%2fmaster%2fpass%2fparis-most-beautiful-places-2.jpg&ehk=PGuI%2fKRwnxpF9sm0Eu7%2fXWESB67KgZTAAhNxsPkLzsI%3d&risl=&pid=ImgRaw&r=0";
const img2 = "https://th.bing.com/th/id/R.0d99a65bc59d6697c3d249394a0e81e7?rik=6Bwr6ZPUk8zmOw&riu=http%3a%2f%2fmedia.cntraveler.com%2fphotos%2f57d961ce3e6b32bf25f5ad0f%2fmaster%2fpass%2fmost-beautiful-paris-louvre-GettyImages-536267205.jpg&ehk=rbD7Lb0bzI2xFATuS%2bS%2f%2fKk7236W5FJJ%2bN5nPIgYDq0%3d&risl=&pid=ImgRaw&r=0";
const img1 = "https://www.madmonkeyhostels.com/wp-content/uploads/2020/02/shutterstock_667548661.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <header>
      <h1>Welcome to My Website</h1>
      <div class="user-account">
        <span>Welcome</span>
        <a href="#">Profile</a>
        <a href="#">Logout</a>
      </div>
    </header>

    <nav>
      <a href="#" class="active">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
    <div className="banner">
      <img src={img1} alt="Banner1" />
      <img src={img2} alt="Banner2" />
      <img src={img3} alt="Banner3" />
    </div>
    <section className="content">
      <h3>About Us</h3>
      <p>Welcome to our website! We offer a variety of services and solutions to cater to your needs. Explore our website to find out more about what we do and how we can help you achieve your goals.</p>
    </section>
    <footer className="footer">
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>

  </div>
);
