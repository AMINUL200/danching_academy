import React from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Practical",
      subtitle: "Learning",
    },
    {
      icon: Users,
      title: "Small Batch",
      subtitle: "Training",
    },
    {
      icon: Star,
      title: "Real Industry",
      subtitle: "Exposure",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--color-white)]
        py-16
        lg:py-20
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-6
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.95fr_1.05fr]
            items-center
            gap-12
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              max-w-[560px]
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
              }}
              className="
                mb-4
                text-[10px]
                sm:text-xs
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[var(--color-primary)]
              "
            >
              About Aurora
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
                delay: 0.1,
                ease: "easeOut",
              }}
              className="
                font-serif
                font-medium
                text-[clamp(2.5rem,4vw,4.4rem)]
                leading-[0.95]
                tracking-[-0.035em]
                text-[var(--color-text)]
              "
            >
              More Than
              <br />
              An Acting Academy
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
                delay: 0.25,
              }}
              className="
                mt-6
                max-w-[510px]
                text-sm
                sm:text-[15px]
                leading-[1.65]
                text-[var(--color-text-secondary)]
              "
            >
              At Aurora Acting Academy, we believe acting is more
              than performance – it's a way to express, connect and
              create change. Our academy provides world-class
              training, practical experience and a supportive
              community for aspiring actors from all backgrounds.
            </motion.p>

            {/* =================================================
                FEATURE ITEMS
            ================================================= */}

            <motion.div
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
                delay: 0.4,
              }}
              className="
                mt-8
                grid
                grid-cols-3
                gap-5
                max-w-[500px]
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
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
                      duration: 0.45,
                      delay: 0.45 + index * 0.1,
                    }}
                    className="
                      flex
                      flex-col
                      items-center
                      text-center
                    "
                  >
                    {/* Icon Circle */}

                    <motion.div
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        w-12
                        h-12
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-[var(--color-primary)]
                        text-[var(--color-white)]
                        shadow-[var(--shadow-purple)]
                      "
                    >
                      <Icon
                        className="w-6 h-6"
                        strokeWidth={1.6}
                      />
                    </motion.div>

                    {/* Text */}

                    <div className="mt-3">
                      <p
                        className="
                          text-xs
                          sm:text-sm
                          font-semibold
                          leading-tight
                          text-[var(--color-text)]
                        "
                      >
                        {feature.title}
                      </p>

                      <p
                        className="
                          text-xs
                          sm:text-sm
                          font-semibold
                          leading-tight
                          text-[var(--color-text)]
                        "
                      >
                        {feature.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* =================================================
                LEARN MORE
            ================================================= */}

            <motion.div
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
                delay: 0.7,
              }}
              className="mt-8"
            >
              <Link to="/about">
                <motion.span
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-7
                    py-3
                    rounded-[var(--radius-md)]
                    bg-primary
                    text-[var(--color-white)]
                    text-sm
                    font-semibold
                    shadow-[var(--shadow-purple)]
                  "
                >
                  <span>
                    Learn More
                  </span>

                  <motion.span
                    whileHover={{
                      x: 4,
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE COLLAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              relative
              w-full
              lg:min-h-[500px]
              flex
              items-center
            "
          >
            <motion.img
              src="/image/about-collage.png"
              alt="Aurora Acting Academy students training"
              className="
                w-full
                h-auto
                object-contain
              "
              initial={{
                scale: 0.96,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;