import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import icon from "../assets/icon.svg";
import group7 from "../assets/Group 3 (5).png";
import quloqchin from "../assets/quloqchin.png";
import Path from "../assets/Path 2.svg";
import kalonka from "../assets/kalonka.png";
import bitmap2 from "../assets/Bitmap (2).png";
import fezbok from "../assets/Path.svg";
import twiter from "../assets/Path (1).svg";
import instagram from "../assets/Shape.svg";
import airpots from "../assets/airpots.png";
function Earphones() {
  const [YX1, setYX1] = useState([]);
  const navigate = useNavigate();
  fetch("http://localhost:3000/xx99-mark-two-headphones")
    .then((res) => res.json())
    .then((data) => {
      setMark(data);
    })
    .catch((err) => {
      console.log(err);
    });
  fetch("http://localhost:3000/xx99-mark-one-headphones")
    .then((res) => res.json())
    .then((data) => {
      setMarkOne(data);
    })
    .then((err) => {
      console.log(err);
    });

  fetch("http://localhost:3000/zx9-speaker")
    .then((res) => res.json())
    .then((data) => {
      setZX9(data);
    })
    .catch((err) => {
      console.log(err);
    });
  fetch("http://localhost:3000/yx1-earphones")
    .then((res) => res.json())
    .then((data) => {
      setYX1(data);
    })
    .catch((err) => {
      console.log(err);
    });
  function handelShop1() {
    navigate("/Shop1");
  }
  function handelShop2() {
    navigate("/Shop2");
  }
  function handelWirles() {
    navigate("/Wireles");
  }
  return (
    <div>
      <div className="bg-[#131313]">
        <div className="w-[1109px] mx-auto">
          <div className="header flex items-center justify-between mb-4">
            <div className="logo">
              <Link to="/" className="text-white text-3xl">
                audiophile
              </Link>
            </div>
            <div className="navbar justify-center">
              <ul className="text-white gap-10">
                <li>
                  <Link
                    className=" transition ease-in-out hover:text-[#D77D4A]"
                    to={"/"}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    className=" transition ease-in-out hover:text-[#D77D4A]"
                    to={"/HeadphonesMain"}
                  >
                    HEADPHONES
                  </Link>
                </li>
                <li>
                  <Link
                    className=" transition ease-in-out hover:text-[#D77D4A]"
                    to={"/Speakers"}
                  >
                    SPEAKERS
                  </Link>
                </li>
                <li>
                  <Link
                    className=" transition ease-in-out hover:text-[#D77D4A]"
                    to={"/Earphones"}
                  >
                    EARPHONES
                  </Link>
                </li>
              </ul>
            </div>
            <div className="icon">
              <img src={icon} alt="" />
            </div>
          </div>
          <hr />
          <h1 className="text-white text-center mt-[100px] mb-20 text-2xl">
            EARPHONES
          </h1>
          .
        </div>
      </div>
      <div className="w-[1109px] mx-auto">
        <div className=" flex items-center mt-20 justify-between">
          <div className="mt-20">
            <img src={group7} alt="" />
          </div>
          <div>
            <h2>NEW PRODUCT</h2>
            <h1 className="w-[445px] text-5xl">{YX1.name}</h1>
            <p className="w-[435px]">{YX1.description}</p>
            <div className="flex mt-10">
              <button className="w-[160xp] h-[48px] text-white p-2 bg-[#D87D4A]">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cards mb-[130px] mt-[120px] w-[1109px] mx-auto flex justify-between ">
        <div className="cart w-[350px] h-[284px]  mb-5">
          <div className="h-[80px]">
            <img className="mx-auto" src={quloqchin} alt="" />
          </div>
          <div className="w-[350px] h-[204px] bg-[#F1F1F1] rounded-lg ">
            <h1 className="text-center pt-[120px] text-2xl">HEADPHONES</h1>
            <p
              onClick={handelShop1}
              className=" flex ml-[150px] gap-2 text-center"
            >
              <p>SHOP</p>
              <img src={Path} alt="" />
            </p>
          </div>
        </div>
        <div className="cart w-[350px] h-[284px]  mb-5">
          <div className="h-[80px]">
            <img className="mx-auto" src={kalonka} alt="" />
          </div>
          <div className="w-[350px] h-[204px] bg-[#F1F1F1] rounded-lg ">
            <h1 className="text-center pt-[120px] text-2xl">SPEAKERS</h1>
            <p
              onClick={handelShop2}
              className=" flex ml-[150px] gap-2 text-center"
            >
              <p>SHOP</p>
              <img src={Path} alt="" />
            </p>
          </div>
        </div>
        <div className="cart w-[350px] h-[294px]  mb-5">
          <div className="h-[80px]">
            <img
              className="mx-auto w-[135px] h-[146px] pt-2 "
              src={airpots}
              alt=""
            />
          </div>
          <div className="w-[350px] h-[204px] bg-[#F1F1F1] rounded-lg ">
            <h1 className="text-center pt-[120px] text-2xl">EARPHONES</h1>
            <p
              onClick={handelWirles}
              className=" flex ml-[150px] gap-2 text-center"
            >
              <p>SHOP</p>
              <img src={Path} alt="" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[150px] w-[1109px] mb-20 mx-auto  h-[588px]">
        <div className="">
          <h1 className="w-[445px] text-6xl">
            Bringing you the best audio gear
          </h1>
          <p className="w-[445px] mt-8">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="W-[540px] h-[588px]">
          <img src={bitmap2} alt="" />
        </div>
      </div>
      <div className="bg-[#131313]">
        <div>
          <div className="flex items-center pt-16 justify-between w-[1109px] mb-10 mx-auto  ">
            <Link className="text-3xl text-white">audiophile</Link>
            <ul className="text-white">
              <li>
                <Link className="mr-8">HOME</Link>
                <Link className="mr-8">HEADPHONES</Link>
                <Link className="mr-8">SPEAKERS</Link>
                <Link>EARPHONES</Link>
              </li>
            </ul>
          </div>
          <div className=" mx-auto flex justify-between w-[1109px]">
            <div>
              <p className="w-[510px] mb-12 text-[#636363]">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
              <span className="text-[#636363]">
                Copyright 2021. All Rights Reserved
              </span>
            </div>
            <div className="flex gap-5">
              <img src={fezbok} alt="" />
              <img src={twiter} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earphones;
