import images from '../../constants';

import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="main-title">Testimonials</h2>
      <div className="container">
        <div className="box">
          <img src={images.avatar1} alt="Avatar" />
            <h3>Zaki Mohsen</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus</p>
        </div>
        <div className="box">
          <img src={images.avatar2} alt="Avatar" />
            <h3>Mohamed Farag</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus</p>
        </div>
        <div className="box">
          <img src={images.avatar3} alt="Avatar" />
            <h3>Ahmed Elgammal</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus</p>
        </div>
        <div className="box">
          <img src={images.avatar4} alt="Avatar" />
            <h3>Mohamed Sallam</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus</p>
        </div>
        <div className="box">
          <img src={images.avatar5} alt="Avatar" />
            <h3>Ahmed Medhat</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus</p>
        </div>
        <div className="box">
          <img src={images.avatar6} alt="Avatar" />
            <h3>Medo Seliem</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials