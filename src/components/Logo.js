import React from "react";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="group relative cursor-pointer"
    >
      <div className="uppercase text-[18px] md:text-[28px] flex items-center relative">
        {"faith".split("").map((letter, i) => (
          <div
            key={i}
            className="origin-top transition-transform duration-400 ease-in-out group-hover:scale-y-0"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            {letter}
          </div>
        ))}
        <div className="uppercase text-[18px] md:text-[28px] absolute bottom-0 left-0 flex items-center">
          {"nguyen".split("").map((letter, i) => (
            <div
              key={i}
              className="origin-bottom transition-transform duration-400 ease-in-out scale-y-0 group-hover:scale-y-100"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logo;
