import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";
import cx from "classnames";

const Header = ({ browser, os, platform, path, score }) => {
  let scoreStr = "";
  Object.keys(score).forEach(k => {
    scoreStr += `${k}:${score[k]}, `;
  });
  scoreStr = scoreStr.slice(0, -2);
  return (
    <header class={style.header}>
      <div class={style.logo}>
	  	<a href="https://zouhir.codes" target="_blank" rel="noopener norefferer">
		  <img src="/assets/logo.png" />
		</a>
	  </div>
      <div class={style.hero}>
        <ul class={style.nav}>
          <li>
            <Link
              class={cx(
                path === "/" && style.active,
                path === "/HTMLMediaElement" && style.active
              )}
              href="/HTMLMediaElement"
            >
              HTMLMediaElement
            </Link>
          </li>
          <li>
            <Link class={path === "/mse" ? style.active : null} href="/mse">
              MSE
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/zouhir/browser-media-support/"
              target="_blank"
              rel="noopener norefferer"
            >
              Github
            </a>
          </li>
        </ul>
        <div class={style.sys}>
          <p>
            OS: <span>{os}</span>{" "}
          </p>
          <p>
            Browser: <span>{browser}</span>
          </p>
          <p>
            Platform: <span>{platform}</span>
          </p>
          <p>
            Score: <span>{scoreStr}</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
