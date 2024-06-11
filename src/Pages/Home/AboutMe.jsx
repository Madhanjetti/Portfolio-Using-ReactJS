export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/1profile.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description" style={{ fontSize: '20px' }}>
          Embarking on a career as a MERN (MongoDB, Express.js, React.js, Node.js) and Java Full Stack Developer with a background in computer science, specifically cybersecurity,
           but no prior industry experience, presents an exciting opportunity to apply my strong foundation in CS concepts to practical, real-world projects. My academic background has equipped me 
           with in-depth knowledge of data structures, algorithms, and programming languages like Java, providing me with a solid footing to dive into full stack development.
           While I may lack hands-on experience in the field, I am eager to leverage my theoretical knowledge and problem-solving skills to master the intricacies of the MERN stack.
          </p>
          <p className="hero--section-description" style={{ fontSize: '20px' }}>
          My ultimate goal is to contribute to cutting-edge projects that blend my expertise in computer science and cybersecurity with the latest advancements in full stack development,
           creating innovative solutions that address complex challenges in the digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
