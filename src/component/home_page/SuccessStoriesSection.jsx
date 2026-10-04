import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const SuccessStoriesSection = () => {
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
        "The practical training and industry exposure here is unmatched. I got my first audition through Aurora!",
    },
    {
      id: 3,
      name: "Sneha Verma",
      course: "Beginner Acting Program",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "A supportive environment with personalized guidance. The best place to learn acting!",
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
     BUILD A TRIPLED LIST FOR SEAMLESS INFINITE LOOP
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

  /* =====================================================
     RESPONSIVE VISIBLE CARDS
  ===================================================== */

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

  /* =====================================================
     INFINITE NEXT / PREV
  ===================================================== */

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

  /* =====================================================
     AUTO SLIDE
  ===================================================== */

  useEffect(() => {
    if (isPaused || isAnimating) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, isAnimating, nextSlide]);

  /* =====================================================
     DOTS
  ===================================================== */

  const totalPages = baseTestimonials.length;
  const activeDot =
    ((currentIndex - middleOffset) % totalPages + totalPages) % totalPages;

  const goToPage = (pageIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(middleOffset + pageIndex);
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <section className="relative overflow-hidden bg-[var(--color-white)] py-14 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* =================================================
            HEADER — centered on its own row
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Success Stories
          </p>

          <h2 className="mt-2 font-serif font-medium text-[clamp(2.2rem,4vw,3.6rem)] leading-none tracking-[-0.035em] text-[var(--color-text)]">
            What Our Students Say
          </h2>
        </motion.div>

        {/* =================================================
            ARROWS ROW — left arrow far left · right arrow far right
        ================================================= */}

        <div className="flex items-center justify-between mt-6">
          {/* LEFT ARROW */}
          <motion.button
            type="button"
            onClick={previousSlide}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="
              shrink-0
              w-11 h-11 rounded-full
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

          {/* RIGHT ARROW */}
          <motion.button
            type="button"
            onClick={nextSlide}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="
              shrink-0
              w-11 h-11 rounded-full
              flex items-center justify-center
              bg-primary
              text-[var(--color-white)]
              shadow-[var(--shadow-purple)]
              cursor-pointer
            "
            aria-label="Next testimonials"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* =================================================
            SLIDER VIEWPORT
        ================================================= */}

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
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="
                      h-full
                      bg-[var(--color-white)]
                      border border-[var(--color-border)]
                      rounded-[var(--radius-md)]
                      px-5 py-5
                      shadow-[var(--shadow-sm)]
                      transition-shadow duration-300
                      hover:shadow-[var(--shadow-md)]
                      hover:border-[var(--color-accent)]
                    "
                  >
                    <div className="flex items-start gap-4">
                      {/* IMAGE */}
                      <div className="shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-accent)]">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm leading-[1.45] text-[var(--color-text-secondary)] line-clamp-3">
                          “{testimonial.review}”
                        </p>

                        <div className="mt-3">
                          <h3 className="text-sm font-semibold text-[var(--color-text)]">
                            {testimonial.name}
                          </h3>
                          <p className="mt-0.5 text-[10px] sm:text-xs text-[var(--color-text-secondary)]">
                            {testimonial.course}
                          </p>
                        </div>

                        {/* STARS */}
                        <div className="flex items-center gap-1 mt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* =================================================
            DOTS
        ================================================= */}

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
  );
};

export default SuccessStoriesSection;