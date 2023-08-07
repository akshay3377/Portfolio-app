"use client";

import Image from "next/image";
import work1 from "../../../../public/images/work1.png";
import work2 from "../../../../public/images/work2.png";
import work3 from "../../../../public/images/work3.png";
import work4 from "../../../../public/images/work4.png";
import work5 from "../../../../public/images/work5.png";
import { motion } from "framer-motion";
import { useState } from "react";
import Select from "react-select";

const data = [
  {
    id: 1,
    value: "Designing",
    label: "Designing",
    results: [
      {
        title: "Food order website UI",
        image: work3,
        link: "https://food-app-xi-fawn.vercel.app/",
      },
      {
        title: "3D website UI",
        image: work4,
        link: "https://3-d-app-akshaysaga777.vercel.app/",
      },
      {
        title: "Tourism website UI",
        image: work5,
        link: "https://tourism-app-rho.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    value: "Functionality",
    label: "Functionality",

    results: [
      {
        title: "Instagram Clone",
        image: work1,
        link: "https://instagram-clone-irjb.vercel.app/?vercelToolbarCode=jrcV5XOTFKC6VBr",
      },
      {
        title: "Mate Cinema",
        image: work2,
        link: "https://matecinema.jbrocksfellas.com/",
      },
    ],
  },
];

const PortfolioSection = () => {
  const [portfolioType, setPortfolioType] = useState([]);
  const handleChangePortfolioType = (selectedOption) =>
    setPortfolioType(selectedOption.results);

  // const handleChangePortfolioType = (e) => {
  //   console.log(e.target.value);
  //   const filteredResult = data.filter((item) => item.type === e.target.value);
  //   setPortfolioType(filteredResult[0]?.results);
  // };

  return (
    <section className="w-[100%] py-[100px] ">
      <div className={"w-[75%]  mx-auto"}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              },
            }}
          >
            <div className="mb-[80px] text-end">
              <h1 className="font-[700] text-[36px] text-end text-black ">
                See My Works Which Will Amaze You!
              </h1>
              <span className="text-grey-light">
                Click on image to visit project.
              </span>
            </div>
            <div className="my-[40px]  w-[300px] mx-auto text-center">
              <Select
                placeholder="Select Portfolio Type"
                isSearchable={false}
                defaultValue={portfolioType}
                onChange={handleChangePortfolioType}
                options={data}
              />
            </div>
          </motion.div>
        </motion.div>
        <div className="flex flex-col">
          {portfolioType?.map((portfolio, index) => {
            return (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.div
                  variants={{
                    offscreen: {
                      y: 160,
                      opacity: 0,
                    },
                    onscreen: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <div className="max-w-[850px] shadow-2xl rounded-[6px] py-[12px] px-[18px] mb-[86px] mx-auto">
                    <a href={portfolio.link} target="_blank">
                      <Image
                        className=" w-[100%] hover:scale-125 transition-all duration-500 cursor-pointer z-50"
                        src={portfolio.image}
                        alt={portfolio.title}
                      />
                    </a>
                    <a
                      href={portfolio.link}
                      target="_blank"
                      className=" inline-block my-[8px] text-blue underline font-[600] text-[16px] "
                    >
                      {portfolio.title}
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
