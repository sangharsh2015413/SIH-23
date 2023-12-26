import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
  "Corporate lawyer",
  "Criminal Lawyer",
  "Family Lawyer",
  "Civil Lawyer",
  "Bankruptcy Lawyer",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="mx-2">
      {/* Explore more section */}
      <div>
        <div className="text-4xl font-semibold text-center mb-8 shadow-xl shadow-cyan-500/50">
          Top Lawyers
          {/* <HighlightText text={" Doctors"} /> */}
          <p className="text-center text-richblack-700 text-lg font-semibold mt-1">
          With expertise honed through years, they stand as paragons of legal excellence.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="hidden  shadow-xl shadow-cyan-500/50 lg:flex gap-5 -mt-3 mx-auto w-max bg-richblack-900 text-white p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => {
          return (
            <div
              className={` text-[16px] flex flex-row items-center gap-2 ${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-white"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-600 hover:text-richblack-5`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}
      </div>
      <div className="hidden lg:block lg:h-[200px] "></div>

      {/* Cards Group */}
      <div className="lg:absolute  gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((ele, index) => {
          return (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;