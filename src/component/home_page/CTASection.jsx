import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--color-dark)]
        border-y
        border-[var(--color-border)]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0">
        <img
          src="/image/cta-acting.png"
          alt="Acting academy student looking toward the stage"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* Dark overlay on right */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-[rgba(8,5,20,0.25)]
            to-[rgba(8,5,20,0.96)]
          "
        />

        {/* Overall cinematic overlay */}

        <div
          className="
            absolute
            inset-0
            bg-[rgba(8,5,20,0.12)]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1440px]
          mx-auto
          min-h-[280px]
          lg:min-h-[300px]
          px-6
          sm:px-8
          lg:px-12
          flex
          items-center
        "
      >
        <div
          className="
            w-full
            flex
            flex-col
            lg:flex-row
            items-center
            lg:items-center
            justify-end
            gap-8
            lg:gap-10
            py-10
            lg:py-12
          "
        >
          {/* =================================================
              TEXT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              w-full
              lg:max-w-[610px]
            "
          >
            {/* Eyebrow */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                text-[10px]
                sm:text-xs
                font-semibold
                tracking-[0.35em]
                uppercase
                text-[var(--color-accent)]
              "
            >
              Ready to Start?
            </motion.p>

            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
                mt-2
                font-serif
                font-medium
                text-[clamp(2.3rem,4vw,4rem)]
                leading-[0.95]
                tracking-[-0.035em]
                text-[var(--color-white)]
              "
            >
              Take the First Step
              <br />
              Towards Your Dream
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mt-4
                max-w-[570px]
                text-sm
                sm:text-[15px]
                leading-[1.5]
                text-white/80
              "
            >
              Applications are now open. Join Aurora Acting Academy
              and be part of a creative and inspiring journey.
            </motion.p>
          </motion.div>

          {/* =================================================
              APPLY BUTTON
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: "easeOut",
            }}
            className="
              shrink-0
            "
          >
            <Link to="/contact">
              <motion.span
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-4
                  min-w-[160px]
                  px-7
                  py-3.5
                  rounded-[var(--radius-full)]
                  bg-[var(--color-accent)]
                  text-[var(--color-dark)]
                  text-sm
                  font-semibold
                  shadow-[var(--shadow-gold)]
                  cursor-pointer
                "
              >
                <span>
                  Apply Now
                </span>

                <motion.span
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SUBTLE PURPLE GLOW
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
          pointer-events-none
          absolute
          left-[25%]
          top-0
          w-[300px]
          h-full
          bg-[var(--color-primary)]
          opacity-10
          blur-[100px]
        "
      />
    </section>
  );
};

export default CTASection;