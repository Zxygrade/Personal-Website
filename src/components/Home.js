import "./Home.css";
import { useNavigate, NavLink } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://allmylinks.com/link/out?id=2jf0lz-1vg6i-1kupr78",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/the_incognito_burrito_/",
    },
    { name: "Twitch", url: "https://www.twitch.tv/the_incognito_burrito" },
    {
      name: "Discord",
      url: "https://allmylinks.com/link/out?id=1vswkfo-1vfhl-1fe1x3b",
    },
 ];
  return (
    <div>
      <header></header>
      <h1>IncognitoBurrito</h1>
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Find me!</h1>
            <div className="control">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-primary is-large"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    // <div>
    //     <h1>IncognitoBurrito</h1>
    //     <button className="button is-dark">Button</button>
    // </div>
  );
}
export default Home;
