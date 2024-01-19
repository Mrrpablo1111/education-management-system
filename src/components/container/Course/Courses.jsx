import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-blue-900">Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tempora illo laborum ex cupiditate tenetur doloribus non velit atque
          amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
          sit! Lorem ipsum dolor sit amet.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8 overflow-x-auto flex-nowrap"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">Most Popular Courses</div>
      <div className="mt-12 overflow-auto flex-nowrap w-full grap-x-8 relative">
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
          <motion.div
            drag = "x" dragConstraints={{ right: 0, left:-width }}
            // dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}
            dragElastic={0.5}
            className="flex gap-8 overflow-x-auto w-full animate-slide">
            {courses.map((course) => {
              return  <Course key={course.id} {...course} />
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
