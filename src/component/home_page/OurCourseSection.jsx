import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

/* =====================================================
   COUNT-UP NUMBER COMPONENT
   Animates from 0 → target when scrolled into view
===================================================== */

const CountUpNumber = ({ value, duration = 1.8, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  // Parse "500+" → { number: 500, suffix: "+" }
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      // small delay before starting the count
      const timer = setTimeout(() => {
        motionValue.set(target);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [inView, target, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return () => unsubscribe();
  }, [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
};

/* =====================================================
   MAIN SECTION
===================================================== */

const OurCourseSection = () => {
  const courses = [
    {
      title: "Beginner Acting Program",
      description:
        "Perfect for those who are new to acting. Learn the basics and build a strong foundation.",
      image: "/image/course-beginner.png",
      points: ["Acting Basics", "Voice & Expression", "Character Building"],
      path: "/courses/beginner",
    },
    {
      title: "Advanced Acting Program",
      description:
        "Take your skills to the next level with intensive training and industry techniques.",
      image: "/image/course-advanced.png",
      points: ["Scene Study", "Method Acting", "On-Camera Training"],
      path: "/courses/advanced",
    },
    {
      title: "Screen Acting & Audition Prep",
      description:
        "Specialized training for films, web series and auditions with real-time practice.",
      image: "/image/course-screen.png",
      points: ["Audition Technique", "Screen Presence", "Portfolio Development"],
      path: "/courses/screen-acting",
    },
  ];

  const statistics = [
    { value: "500+", label: "Students Trained" },
    { value: "50+", label: "Workshops Conducted" },
    { value: "95%", label: "Student Satisfaction" },
    { value: "20+", label: "Industry Collaborations" },
  ];

  /* =====================================================
     MOTION VARIANTS
  ===================================================== */

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-ivory)]">
      {/* =====================================================
          COURSES SECTION
      ===================================================== */}

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-[700px] mx-auto"
        >
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[var(--color-primary)]">
            Our Courses
          </p>

          <h2 className="mt-2 font-serif font-medium text-[clamp(2.2rem,4vw,3.7rem)] leading-[1] tracking-[-0.035em] text-[var(--color-text)]">
            Choose Your Acting Path
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-[var(--color-text-secondary)]">
            From beginner to advanced, we have the right program to help you grow.
          </p>
        </motion.div>

        {/* ===================================================
            COURSE CARDS — one-by-one reveal
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25, // ← delay between each card
                delayChildren: 0.1,
              },
            },
          }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {courses.map((course) => (
            <motion.article
              key={course.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="course-card group bg-[var(--color-white)] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-sm)]"
            >
              {/* IMAGE */}
              <div className="relative mx-2 mt-2 overflow-hidden rounded-[var(--radius-md)] aspect-[2/1]">
                <motion.img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,7,13,0.35)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* CONTENT */}
              <div className="px-4 sm:px-5 pt-4 pb-5">
                <h3 className="text-base sm:text-lg font-semibold text-[var(--color-text)]">
                  {course.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-[1.5] text-[var(--color-text-secondary)] min-h-[58px]">
                  {course.description}
                </p>

                <ul className="mt-3 space-y-2">
                  {course.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="flex items-center justify-center w-4 h-4 shrink-0 rounded-full bg-[var(--color-accent)] text-[var(--color-dark)]">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={course.path}
                  className="inline-flex items-center gap-2 mt-5 text-xs sm:text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] transition-colors"
                >
                  <span>Explore Program</span>
                  <motion.span
                    className="inline-flex"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          STATISTICS SECTION
      ===================================================== */}

      <div className="relative overflow-hidden bg-[var(--color-dark)]">
        {/* Background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,20,95,0.55),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,20,95,0.45),transparent_45%)]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-9">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2, // ← delay between each stat
                  delayChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                className={`
                  relative flex flex-col items-center justify-center
                  text-center px-4 py-3
                  ${
                    index !== statistics.length - 1
                      ? "lg:border-r lg:border-[var(--color-border)]"
                      : ""
                  }
                  ${
                    index < 2
                      ? "border-b border-[var(--color-border)] lg:border-b-0"
                      : ""
                  }
                `}
              >
                {/* Animated Number */}
                <div className="font-serif text-3xl sm:text-4xl lg:text-[2.7rem] leading-none text-[var(--color-accent)]">
                  <CountUpNumber
                    value={stat.value}
                    duration={1.8}
                    delay={0.15 + index * 0.15}
                  />
                </div>

                {/* Label */}
                <p className="mt-2 text-[10px] sm:text-xs font-medium text-white">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurCourseSection;