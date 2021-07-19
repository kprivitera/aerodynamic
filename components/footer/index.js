const Footer = () => (
  <footer id="sticky-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-12">
          <div className="box">
            <img src="https://via.placeholder.com/248x214" alt="" />
          </div>
        </div>

        <div class="col-md-3 col-12" id="p1">
          <h5 className="title">Links</h5>
          <ul className="list-unstyled">
            <li> Terms And Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div class="col-md-3 col-12" id="p2">
          <h5 className="title">Products</h5>
          <ul className="list-unstyled">
            <li>Codemaps</li>
            <li>Opportunity calendar</li>
          </ul>
        </div>

        <div class=" col-md-3 col-12" id="p3">
          <h5 className="title">Contact us</h5>

          <ul className="list-unstyled">
            <li>
              <i href="#" class="fa fa-phone" aria-hidden="true" />
              (+91) 83848-13292
            </li>

            <li>
              <i class="fa fa-envelope" aria-hidden="true" />
              girlcodeit@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col">
          &copy; {new Date().getFullYear()} Girl Code It | All Rights Reserved
        </div>
        <div className="col-md-4 col-12">
          <i href="#" class="fa fa-facebook" />
          <i href="#" class="fa fa-twitter" />
          <i href="#" class="fa fa-instagram" />
          <i href="#" class="fa fa-linkedin" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
