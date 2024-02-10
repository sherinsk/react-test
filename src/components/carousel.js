function Carousel() {
    return (
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://s1.1zoom.me/big7/923/Helicopters_Painting_Art_Sunrises_and_sunsets_535113_1920x540.jpg" className="d-block w-100" alt="pic" />
          </div>
          <div className="carousel-item">
            <img src="https://wallpapers.com/images/hd/dual-screen-space-wxi6ijfgooawseka.jpg" className="d-block w-100" alt="pic" />
          </div>
          <div className="carousel-item">
            <img src="https://mcdn.wallpapersafari.com/medium/77/14/Xjo72l.jpg" className="d-block w-100" alt="pic" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
  
  export default Carousel;
  