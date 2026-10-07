import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import {
  Star,
  Award,
  Users,
  Clapperboard,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =====================================================
   COUNT-UP NUMBER COMPONENT
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

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

/* =====================================================
   MAIN PAGE
===================================================== */

const SuccessStoriesPage = () => {
  /* =====================================================
     STATS
  ===================================================== */

  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "50+", label: "Workshops Conducted" },
    { value: "95%", label: "Student Satisfaction" },
    { value: "20+", label: "Industry Collaborations" },
  ];

  /* =====================================================
     FEATURED STORIES
  ===================================================== */

  const stories = [
    {
      name: "Riya Kapoor",
      slug: "riya-kapoor",
      course: "Screen Acting Program",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      title: "From First Audition to Screen",
      description:
        "Riya joined Aurora with a passion for acting but little experience in front of the camera. Through practical scene work, audition preparation and personalized mentorship, she developed the confidence to pursue professional opportunities.",
      achievement: "First Screen Audition",
    },
    {
      name: "Arjun Mehta",
      slug: "arjun-mehta",
      course: "Advanced Acting Program",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      title: "Finding Confidence Through Performance",
      description:
        "Arjun wanted to take his acting skills to the next level. The advanced program helped him strengthen his scene study, character development and on-camera performance.",
      achievement: "Advanced Training Completed",
    },
    {
      name: "Sneha Verma",
      slug: "sneha-verma",
      course: "Beginner Acting Program",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      title: "A New Beginning",
      description:
        "Sneha started with no formal acting experience. Aurora helped her discover her voice, build confidence and take her first steps toward the acting industry.",
      achievement: "First Acting Program",
    },
  ];

  /* =====================================================
     TESTIMONIALS (carousel)
  ===================================================== */

  const baseTestimonials = [
    {
      id: 1,
      name: "Riya Kapoor",
      course: "Screen Acting Program",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Aurora gave me the confidence and skills to chase my dream. The mentors are truly amazing!",
    },
    {
      id: 2,
      name: "Arjun Mehta",
      course: "Advanced Acting Program",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "The practical training and industry exposure here is unmatched. I learned something valuable in every class.",
    },
    {
      id: 3,
      name: "Sneha Verma",
      course: "Beginner Acting Program",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "A supportive environment with personalized guidance. Aurora helped me become much more confident.",
    },
    {
      id: 4,
      name: "Kabir Sharma",
      course: "Screen Acting Program",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      review:
        "Every class helped me become more confident in front of the camera. The training is practical and inspiring.",
    },
    {
      id: 5,
      name: "Ananya Singh",
      course: "Advanced Acting Program",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      review:
        "The mentors understand every student's strengths and help you develop your own acting style.",
    },
    {
      id: 6,
      name: "Aditya Rao",
      course: "Beginner Acting Program",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      review:
        "I joined as a complete beginner and gained confidence, stage presence and a much better understanding of acting.",
    },
  ];

  /* =====================================================
     CAROUSEL — INFINITE LOOP
  ===================================================== */

  const LOOP_COPIES = 3;

  const testimonials = Array.from({ length: LOOP_COPIES }).flatMap(
    (_, copyIndex) =>
      baseTestimonials.map((t) => ({
        ...t,
        uid: `${t.id}-copy-${copyIndex}`,
      }))
  );

  const middleOffset = baseTestimonials.length;

  const [currentIndex, setCurrentIndex] = useState(middleOffset);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isAnimating]);

  const previousSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isAnimating]);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    const total = baseTestimonials.length;

    if (currentIndex >= middleOffset + total) {
      setCurrentIndex(currentIndex - total);
    } else if (currentIndex < middleOffset) {
      setCurrentIndex(currentIndex + total);
    }
  };

  /* Auto-play */
  useEffect(() => {
    if (isPaused || isAnimating) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, isAnimating, nextSlide]);

  /* Dots */
  const totalPages = baseTestimonials.length;
  const activeDot =
    ((currentIndex - middleOffset) % totalPages + totalPages) % totalPages;

  const goToPage = (pageIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(middleOffset + pageIndex);
  };

  /* =====================================================
     ACHIEVEMENTS
  ===================================================== */

  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Students are prepared to confidently step into professional auditions and performance opportunities.",
    },
    {
      icon: Clapperboard,
      title: "Screen Opportunities",
      description:
        "Practical screen acting and audition preparation help students understand real production environments.",
    },
    {
      icon: Users,
      title: "Creative Community",
      description:
        "Students build lasting connections with mentors and fellow performers.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description:
        "Our training encourages actors to keep developing their craft beyond the classroom.",
    },
  ];

  /* =====================================================
     MOTION VARIANTS
  ===================================================== */

  const statVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="bg-[var(--color-white)]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[560px] lg:min-h-[650px] overflow-hidden bg-[var(--color-dark)]">
        <div className="absolute inset-0">
          <img
            src="/image/success-stories-hero.png"
            alt="Aurora acting students performing"
            className="absolute inset-0 w-full h-full object-cover object-[65%_center] sm:object-center"
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[var(--color-dark)]
              via-[rgba(8,5,20,0.84)] via-[58%]
              to-transparent
            "
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(91,35,126,0.3),transparent_40%)]" />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-dark)] to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto min-h-[560px] lg:min-h-[650px] px-6 sm:px-8 lg:px-12 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[700px] pt-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-[var(--color-accent)]"
            >
              Success Stories
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-serif text-[clamp(3rem,6vw,5.8rem)] leading-[0.88] tracking-[-0.045em] text-white"
            >
              Dreams Become
              <br />
              <span className="text-[var(--color-accent)]">Performances.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[560px] text-sm sm:text-base leading-[1.7] text-white/75"
            >
              Discover the journeys of aspiring actors who
              found confidence, developed their craft and
              took their next step with Aurora.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="w-10 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/60">
                Real journeys. Real growth.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          STATS — appear one-by-one + count-up
      ===================================================== */}

      <section className="relative bg-[var(--color-dark)] border-y border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2, // ← one-by-one
                delayChildren: 0.1,
              },
            },
          }}
          className="max-w-[1300px] mx-auto grid grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="
                py-8 lg:py-10
                text-center
                border-r border-white/10
                last:border-r-0
              "
            >
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--color-accent)]">
                <CountUpNumber
                  value={stat.value}
                  duration={1.8}
                  delay={0.15 + index * 0.15}
                />
              </p>

              <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.12em] text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          FEATURED STORIES
      ===================================================== */}

      <section className="py-20 lg:py-28 bg-[var(--color-ivory)]">
        <div className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-[700px] mx-auto"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[var(--color-primary)]">
              Featured Stories
            </p>

            <h2 className="mt-3 font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[0.95] text-[var(--color-text)]">
              Stories That Inspire
            </h2>

            <p className="mt-5 text-sm leading-7 text-[var(--color-text-secondary)]">
              Every actor starts somewhere. These are some
              of the journeys that began at Aurora.
            </p>
          </motion.div>

          <div className="mt-14 space-y-8">
            {stories.map((story, index) => (
              <motion.article
                key={story.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="
                  grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]
                  overflow-hidden
                  rounded-[var(--radius-lg)]
                  bg-[var(--color-white)]
                  border border-[var(--color-border)]
                  shadow-[var(--shadow-sm)]
                "
              >
                <div
                  className={`
                    relative h-[320px] lg:h-[390px] overflow-hidden
                    ${index % 2 !== 0 ? "lg:order-2" : ""}
                  `}
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute left-6 bottom-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {story.course}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl text-white">
                      {story.name}
                    </h3>
                  </div>
                </div>

                <div
                  className={`
                    flex items-center p-7 sm:p-10 lg:p-14
                    ${index % 2 !== 0 ? "lg:order-1" : ""}
                  `}
                >
                  <div className="w-full">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)]">
                      Student Journey
                    </p>

                    <h3 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight text-[var(--color-text)]">
                      {story.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[var(--color-text-secondary)]">
                      {story.description}
                    </p>

                    <motion.div
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-6 inline-block"
                    >
                      <Link
                        to={`/success-stories/${story.slug}`}
                        className="btn-primary !px-5 !py-2.5 !text-xs !shadow-none inline-flex items-center gap-2"
                      >
                        <Award className="w-4 h-4" />
                        <span>{story.achievement}</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STUDENT TESTIMONIALS — INFINITE CAROUSEL
      ===================================================== */}

      <section className="py-20 lg:py-24 bg-[var(--color-white)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[var(--color-primary)]">
              Student Voices
            </p>

            <h2 className="mt-3 font-serif text-[clamp(2.5rem,4vw,4rem)] text-[var(--color-text)]">
              What Our Students Say
            </h2>
          </motion.div>

          {/* Arrows row — left arrow far left, right arrow far right */}
          <div className="flex items-center justify-between mt-6">
            <motion.button
              type="button"
              onClick={previousSlide}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="
                shrink-0 w-11 h-11 rounded-full
                flex items-center justify-center
                bg-[var(--color-white)]
                text-[var(--color-primary)]
                border border-[var(--color-border)]
                shadow-[var(--shadow-sm)]
                hover:border-[var(--color-accent)]
                hover:text-[var(--color-accent)]
                cursor-pointer
              "
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>

            <motion.button
              type="button"
              onClick={nextSlide}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="
                shrink-0 w-11 h-11 rounded-full
                flex items-center justify-center
                bg-primary text-[var(--color-white)]
                shadow-[var(--shadow-purple)]
                cursor-pointer
              "
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Carousel viewport */}
          <div
            className="relative mt-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <motion.div
                className="flex -mx-2"
                animate={{
                  x: `-${currentIndex * (100 / visibleCards)}%`,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onAnimationComplete={handleAnimationComplete}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.uid}
                    className="shrink-0 px-2"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <motion.article
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="
                        h-full p-6
                        rounded-[var(--radius-lg)]
                        border border-[var(--color-border)]
                        bg-[var(--color-white)]
                        shadow-[var(--shadow-sm)]
                        hover:shadow-[var(--shadow-md)]
                        hover:border-[var(--color-accent)]
                        transition-shadow duration-300
                      "
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-accent)]"
                        />

                        <div>
                          <h3 className="text-sm font-semibold text-[var(--color-text)]">
                            {testimonial.name}
                          </h3>
                          <p className="mt-1 text-[10px] text-[var(--color-text-secondary)]">
                            {testimonial.course}
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 text-sm leading-7 text-[var(--color-text-secondary)] line-clamp-4">
                        "{testimonial.review}"
                      </p>

                      <div className="flex gap-1 mt-5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
                          />
                        ))}
                      </div>
                    </motion.article>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-5">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToPage(index)}
                className={`
                  h-1.5 rounded-full transition-all duration-300 cursor-pointer
                  ${
                    index === activeDot
                      ? "w-6 bg-[var(--color-accent)]"
                      : "w-1.5 bg-[var(--color-border)] hover:bg-[var(--color-accent)]/50"
                  }
                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section className="py-20 lg:py-24 bg-[var(--color-dark)] relative overflow-hidden">
        <div className="absolute left-[-150px] bottom-[-150px] w-[450px] h-[450px] rounded-full bg-[var(--color-primary)] blur-[150px] opacity-20" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[var(--color-accent)]">
              The Aurora Difference
            </p>

            <h2 className="mt-3 font-serif text-[clamp(2.5rem,4vw,4rem)] text-white">
              Growth Beyond The Stage
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -5 }}
                  className="
                    p-6 rounded-[var(--radius-lg)]
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-sm
                  "
                >
                  <Icon
                    className="w-6 h-6 text-[var(--color-accent)]"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-5 font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/55">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden py-20 lg:py-24 bg-[var(--color-ivory)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[850px] mx-auto px-6 text-center"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[var(--color-primary)]">
            Your Story Could Be Next
          </p>

          <h2 className="mt-3 font-serif text-[clamp(2.7rem,5vw,4.8rem)] leading-[0.95] text-[var(--color-text)]">
            Ready To Begin
            <br />
            Your Journey?
          </h2>

          <p className="mt-5 max-w-[600px] mx-auto text-sm sm:text-[15px] leading-7 text-[var(--color-text-secondary)]">
            Take the first step toward becoming the actor
            you want to be.
          </p>

          <motion.div
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 inline-block"
          >
            <Link
              to="/contact"
              className="btn-primary !px-6 !py-2.5 !text-sm !shadow-none inline-flex items-center gap-2"
            >
              <span>Apply Now</span>
              <motion.span
                className="text-base inline-block"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default SuccessStoriesPage;