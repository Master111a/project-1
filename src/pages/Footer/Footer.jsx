import logo from "../../assets/Logo.png";

export default function Footer() {
  return (
    <div className="flex max-w-xl mx-auto">
      <div className="flex flex-col max-w-[20%]">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div></div>
      </div>

      <div className="flex">
        <div>
          <h4>Company</h4>
          <span>About</span>
          <span>Career</span>
          <span>Mobile</span>
        </div>
        <div>
          <h4>Contact</h4>
          <span>Why Travlog?</span>
          <span>Partner with us</span>
          <span>FAQ’s</span>
          <span>Blog</span>
        </div>
        <div>
          <h4>Meet Us</h4>
          <span>+00 92 1234 56789</span>
          <span>info@travlog.com</span>
          <span>205. R Street, New York BD23200</span>
        </div>
      </div>
    </div>
  );
}
