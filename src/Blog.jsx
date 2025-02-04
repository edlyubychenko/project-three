

const Blog = (props) => {

        return   (
<div className="explore-section" id="explore-section">
    <h1 className="section-title" data-aos="fade-up">Explore the world</h1>
    <p className="section-para" data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div className="tours-container">
        <div className="tour-card" data-aos="fade-up">
            <img src="public/Img/australia.png" className="tour-img" alt="tour-image"/>
            <div className="tour-body">
                <h3 className="tour-name">Australia</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>

        <div className="tour-card" data-aos="fade-up">
            <img src="public/Img/maldives.png" className="tour-img" alt="tour-image"/>
            <div className="tour-body">
                <h3 className="tour-name">Maldives</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>

        <div className="tour-card" data-aos="fade-up">
            <img src="public/Img/paris.png" className="tour-img" alt="tour-image"/>
            <div className="tour-body">
                <h3 className="tour-name">Paris</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>

        <div className="tour-card" data-aos="fade-up">
            <img src="public/Img/dubai.png" className="tour-img" alt="tour-image"/>
            <div className="tour-body">
                <h3 className="tour-name">Dubai</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>

        <div className="tour-card" data-aos="fade-up">
            <img src="public/Img/india.png" className="tour-img" alt="tour-image"/>
            <div className="tour-body">
                <h3 className="tour-name">India</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>

        <div className="tour-card" data-aos="fade-up">
            <img src="public/Img/italy.png" className="tour-img" alt="tour-image"/>
            <div className="tour-body">
                <h3 className="tour-name">Italy</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>
    </div>

</div>

        )
      }

      export default Blog 