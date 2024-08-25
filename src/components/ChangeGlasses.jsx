import React from "react";
import "./style.scss";
import { useState } from "react";

const ChangeGlasses = () => {
  const [model, setModel] = useState(null);

  let arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  return (
    <div className="change_glasses container">
      <div className="overlay"></div>
      <div className="content">
        <h2 className="text-3xl py-5 bg-black text-white opacity-70 text-center mx-auto">
          TRY GLASSES APP ONLINE
        </h2>
        <div>
          <div className="flex justify-center space-x-40 pt-14 mb-14">
            <img
              width={200}
              src="./public/glassesImage/model.jpg"
              className="model-container"
            />
            <img width={200} src="./public/glassesImage/model.jpg" />

            {model && (
              <>
                <img src={model.url} className="glasses-image" />
                <div className="glasses-info">
                  <h4>{model.name}</h4>
                  <p>{model.desc}</p>
                  <p>Price: {model.price} USD</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="bg-white justify-center items-center list_glasses py-10 px-5">
          {arrGlasses.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setModel(item);
                }}
                className="mr-5 mb-5"
              >
                <img src={item.url} width={100} className="border" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChangeGlasses;
