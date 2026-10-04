import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  Clapperboard,
  Users,
  Star,
  Drama,
} from "lucide-react";

const HeroSection = () => {
  const features = [
    {
      icon: Clapperboard,
      title: "Industry",
      subtitle: "Focused Training",
    },
    {
      icon: Users,
      title: "Experienced",
      subtitle: "Mentors",
    },
    {
      icon: Star,
      title: "Audition",
      subtitle: "Opportunities",
    },
    {
      icon: Drama,
      title: "Creative",
      subtitle: "Community",
    },
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        lg:min-h-[720px]
        overflow-hidden
        bg-[var(--color-dark)]
        text-[var(--color-white)]
      "
    >
      {/* =====================================================
          HERO BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0">
        <img
          src="/image/acting-hero.png"
          alt="Acting academy performer on stage"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* Dark cinematic overlay */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(8,7,13,0.98)_0%,rgba(8,7,13,0.88)_25%,rgba(8,7,13,0.38)_55%,rgba(8,7,13,0.15)_100%)]
          "
        />

        {/* Bottom dark fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-[var(--color-dark)]
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1440px]
          mx-auto
          min-h-screen
          lg:min-h-[720px]
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
            pt-28
            pb-12
            lg:pt-24
            lg:pb-10
          "
        >
          <div className="max-w-[520px]">

            {/* =================================================
                EYEBROW
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="
                mb-4
                text-[10px]
                sm:text-xs
                font-semibold
                tracking-[0.35em]
                uppercase
                text-[var(--color-accent)]
              "
            >
              Acting Academy
            </motion.p>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="
                font-serif
                font-medium
                text-[clamp(3rem,5.4vw,5.4rem)]
                leading-[0.88]
                tracking-[-0.035em]
                text-[var(--color-white)]
              "
            >
              Act Today
              <br />

              For a{" "}
              <span className="text-[var(--color-accent)]">
                Brighter
              </span>

              <br />

              <span className="text-[var(--color-accent)]">
                Tomorrow
              </span>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="
                mt-6
                max-w-[450px]
                text-sm
                sm:text-[15px]
                leading-[1.55]
                text-white/80
              "
            >
              Professional acting training, real industry exposure
              and personalized mentorship to help you turn your passion
              into a successful career.
            </motion.p>

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
                ease: "easeOut",
              }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              {/* Apply Now */}

              <motion.a
                href="/contact"
                className="
                  btn-primary
                  !px-7
                  !py-3
                  !text-sm
                  !font-semibold
                  !shadow-[var(--shadow-gold)]
                "
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>
                  Apply Now
                </span>

                <motion.span
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>

              {/* Watch Video */}

              <motion.button
                type="button"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-3
                  rounded-[var(--radius-full)]
                  border
                  border-[var(--color-accent)]
                  bg-transparent
                  text-[var(--color-white)]
                  text-sm
                  font-medium
                  cursor-pointer
                "
                whileHover={{
                  y: -3,
                  backgroundColor:
                    "rgba(231,185,94,0.08)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-6
                    h-6
                    rounded-full
                    bg-[var(--color-accent)]
                    text-[var(--color-dark)]
                  "
                >
                  <Play
                    className="w-3 h-3 fill-current"
                  />
                </span>

                <span>
                  Watch Video
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM FEATURES
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.85,
              ease: "easeOut",
            }}
            className="
              mt-12
              lg:mt-14
              grid
              grid-cols-2
              sm:grid-cols-4
              gap-5
              lg:gap-8
              max-w-[700px]
            "
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.9 + index * 0.1,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      shrink-0
                      text-[var(--color-accent)]
                    "
                  >
                    <Icon
                      className="
                        w-7
                        h-7
                      "
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Text */}

                  <div className="leading-tight">
                    <p
                      className="
                        text-xs
                        font-medium
                        text-[var(--color-white)]
                      "
                    >
                      {feature.title}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        text-white/65
                      "
                    >
                      {feature.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* =====================================================
            DECORATIVE RIGHT TEXT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="
            hidden
            lg:block
            absolute
            right-10
            xl:right-16
            bottom-16
            z-10
            pointer-events-none
          "
        >
          <div
            className="
              font-serif
              italic
              text-[var(--color-accent)]
              text-4xl
              xl:text-5xl
              leading-[0.9]
              text-right
              -rotate-[8deg]
              opacity-95
            "
          >
            Stories
            <br />
            Shape
            <br />
            People
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;