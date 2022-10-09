import images from '../../constants';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="box">
        <h3>Psycho</h3>
        <ul className="social">
          <li>
            <a href="#/" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#/" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#/" className="youtube">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur</p>
      </div>
      <div className="box">
        <ul className="links">
          <li>
            <a href="#/">important link 1</a>
          </li>
          <li>
            <a href="#/">important link 2</a>
          </li>
          <li>
            <a href="#/">important link 3</a>
          </li>
          <li>
            <a href="#/">important link 4</a>
          </li>
          <li>
            <a href="#/">important link 5</a>
          </li>
        </ul>
      </div>
      <div className="box">
        <div className="line">
          <i className="fas fa-map-marker-alt fa-fw"></i>
          <div className="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
        </div>
        <div className="line">
          <i className="far fa-clock fa-fw"></i>
          <div className="info">Business Hours: From 10:00 To 18:00</div>
        </div>
        <div className="line">
          <i className="fas fa-phone-volume fa-fw"></i>
          <div className="info">
            <span>+20123456789</span>
            <span>+20198765432</span>
          </div>
        </div>
      </div>
      <div className="box footer-gallery">
        <img src={images.gallery1} alt="Gallery" />
        <img src={images.gallery2} alt="Gallery" />
        <img src={images.gallery3} alt="Gallery" />
        <img src={images.gallery4} alt="Gallery" />
        <img src={images.gallery5} alt="Gallery" />
        <img src={images.gallery6} alt="Gallery" />
      </div>
    </div>
    <p className="copyright">Made With Zaki Mohsen</p>
  </footer>
);

export default Footer;
