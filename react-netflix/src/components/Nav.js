import React, { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);

  //   Useeffect 안에서 리스너를 하나 등록
  // 컴포넌트 안쓸때 리스너를 등록한걸 없애줘야함
  // 그건 window.removeEventListener로 해준다.
  //**스크롤 할 때 작동 */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    //show가 true 일때 nav__black 활성화
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netfllix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        //리로드
        onClick={() => window.location.reload()}
      />

      <img
        alt="User logged"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="nav__avatar"
      />
    </nav>
  );
}
