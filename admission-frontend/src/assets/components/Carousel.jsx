import '../css/Carousel.css'

function Carousel() {

  return (
    <div className='card-body1'>
     <div className="profile1">
        <img src='https://upload.wikimedia.org/wikipedia/en/c/c0/NezukoKamado.png'  className='profile1-img'/>
     </div>
     <div className="profile1-content">
        <div className="profile1-title">
            <p className='profile1-header'>Nazuko</p>
        </div>
        <div className="profile1-role">
            <p className="role">Student</p>
        </div>
        <div className="profile1-description">
            <p className="desc">This webapp made the process of admission easier</p>
        </div>
     </div>
    </div>
  );
}

export default Carousel;