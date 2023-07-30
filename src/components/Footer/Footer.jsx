import Footer from "rc-footer";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import "./Footer.css";
const Footers = () => {
  return (
    <div>
      <hr className="footer-rule" />
      <nav className="footer-inner-container">
        <ul className="footer-list">
          <div className="footer-inner-list-container">
            <li className="f-list-item">About</li>
            <li className="f-list-item">Contacts</li>
            <li className="f-list-item">Documentaion</li>
            <li className="f-list-item">Dark Mode</li>
          </div>
        </ul>
      </nav>

      <Footer backgroundColor="#000" bottom="Made with ❤️ by Khan" />
    </div>
  );
};

export default Footers;
