export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Madhan Jetti</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            
          Transforming ideas into robust, scalable applications with expertise in MERN and Java Full Stack Development.
            <br />Ready to drive innovation and exceed expectations
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/1profile.png" alt="Hero Section" style={{ width: '500px', height: '500px', float: 'left', // Align the image to the left
         marginRight: '10px'  }}/>
      </div>
    </section>
  );
}
