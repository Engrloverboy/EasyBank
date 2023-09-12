import React from "react";
import Money from "../assets/image/image-currency.jpg";
import Food from "../assets/image/image-restaurant.jpg";
import Plane from "../assets/image/image-plane.jpg";
import Confetti from "../assets/image/image-confetti.jpg";


const Blogs = [
  {
    name: "By Claire Robinson",
    header: "Receive money in any currency with no fees",
    word: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single....",
    imageSrc: Money,
    alt: "",
  },
  {
    name: "By Wilson Hutton",
    header: "Treat yourself without worrying about money",
    word: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you....",
    imageSrc: Food,
    alt: "",
  },
  {
    name: "By Wilson Hutton",
    header: "Take your Easybank card wherever you go",
    word: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you....",
    imageSrc: Plane,
    alt: "",
  },
  {
    name: "By Claire Robinson",
    header: "Our invite-only Beta accounts are now live!",
    word: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site....",
    imageSrc: Confetti,
    alt: "",
  },
];

const Blog = () => {
  // Function to truncate words to a specific length
  function truncate(text, limit) {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }


  return (
    <div className="flex-article">
      {Blogs.map((item, index) => (
        <div className="all-article">
          <img className="image" src={item.imageSrc} alt={item.name} />

          <div className="down-part">
            <small className="name">By {item.name}</small>
            <h4 className="header">{item.header}</h4>
            <p className="word">{truncate(item.word, 15)}</p>
          </div>
        </div>
      ))}

      {/* <div className="all-article">
        <img className="image" src={Food} alt="" />
        <div className="down-part">
          <small className="name">By Wilson Hutton</small>
          <h4 className="header">
            Treat yourself without worrying about money
          </h4>
          <p className="word">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you....
          </p>
        </div>{" "}
      </div>

      <div className="all-article">
        <img className="image" src={Plane} alt="" />
        <div className="down-part">
          <small className="name">By Wilson Hutton</small>
          <h4 className="header">Take your Easybank card whereever you go</h4>
          <p className="word">
            We want you to enjoy your travels. This is why we don't charge any
            fees on purchases while you're abroad. We'll even show you....
          </p>
        </div>{" "}
      </div>

      <div className="all-article">
        <img className="image" src={Confetti} alt="" />
        <div className="down-part">
          <small className="name">By Claire Robinson</small>
          <h4 className="header">
            Our invite-only Beta accounts are now live!
          </h4>
          <p className="word">
            After a lot of hard work by the whole team, we're excited to launch
            our closed beta, It's easy to request an invite through the site....
          </p>
        </div>{" "}
      </div> */}
    </div>
  );
};

export default Blog;
