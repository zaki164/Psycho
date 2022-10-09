import { useEffect } from 'react';
import { useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const boxref = useRef();
  const statsref = useRef();
  const startcount = (ele) => {
    let goal = ele.dataset.goal;
    let countInterval = setInterval(() => {
      ele.textContent++;
      if (ele.textContent === goal) {
        clearInterval(countInterval)
      }
    }, 500 / goal)
  }
  useEffect(() => {
    let spanarr = [];
    [...boxref.current.children].forEach(element => {
      spanarr.push(element.lastChild.previousElementSibling);
    });
    let started = false;
      window.addEventListener('scroll', () => {
        if (statsref.current && window.scrollY > statsref.current.offsetTop) {
          if (!started) {
            spanarr.forEach((ele) => {
              startcount(ele);
            })
          }
          started = true;
        }
      })
      console.log('yes');
  }, [])
  return (
    <section className="stats" id="stats" ref={statsref}>
      <h2>Our Awesome Stats</h2>
      <div className="container" ref={boxref}>
        <div className="box">
          <i className="far fa-user fa-2x fa-fw"></i>
          <span className="number" data-goal="44">0</span>
          <span className="text">Clients</span>
        </div>
        <div className="box">
          <i className="fas fa-code fa-2x fa-fw"></i>
          <span className="number" data-goal="155">0</span>
          <span className="text">Projects</span>
        </div>
        <div className="box">
          <i className="fas fa-globe-asia fa-2x fa-fw"></i>
          <span className="number" data-goal="377">0</span>
          <span className="text">Countries</span>
        </div>
        <div className="box">
          <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
          <span className="number" data-goal="290">0</span>
          <span className="text">Money</span>
        </div>
      </div>
    </section>
  )
}

export default Stats