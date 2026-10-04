import React from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Users,
  Clapperboard,
  Heart,
} from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Industry Expert",
      subtitle: "Mentors",
      description: "Learn from working professionals",
    },
    {
      icon: Users,
      title: "Hands-on",
      subtitle: "Workshops",
      description: "Practical training with real scenarios",
    },
    {
      icon: Clapperboard,
      title: "Audition & Casting",
      subtitle: "Support",
      description: "Get opportunities in films, web series & theatre",
    },
    {
      icon: Heart,
      title: "A Supportive",
      subtitle: "Community",
      description: "Be part of a creative and inspiring family",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pt-1
      "
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          min-h-[620px]
        "
      >
        {/* =====================================================
            LEFT IMAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
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
            min-h-[420px]
            lg:min-h-[620px]
            overflow-hidden
          "
        >
          <motion.img
            src="/image/why-choose-aurora.png"
            alt="Acting student sitting in a theatre"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
            "
            initial={{
              scale: 1.08,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          />

          {/* Dark cinematic overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/35
              via-black/10
              to-transparent
            "
          />

          {/* =================================================
              QUOTE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              absolute
              left-8
              sm:left-10
              lg:left-12
              bottom-10
              sm:bottom-12
              lg:bottom-14
              max-w-[270px]
              text-[var(--color-white)]
            "
          >
            <blockquote
              className="
                font-serif
                text-2xl
                sm:text-3xl
                lg:text-[2.1rem]
                leading-[1.1]
                italic
                drop-shadow-lg
              "
            >
              “Acting is
              <br />
              a journey of
              <br />
              discovery.”
            </blockquote>

            {/* Gold line */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 48,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="
                mt-5
                h-[3px]
                bg-[var(--color-accent)]
              "
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}

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
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            flex
            items-center
            bg-[var(--color-white)]
            px-7
            sm:px-10
            lg:px-12
            xl:px-16
            py-14
            lg:py-16
          "
        >
          <div className="w-full max-w-[650px]">
            {/* =================================================
                EYEBROW
            ================================================= */}

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
                text-[10px]
                sm:text-xs
                font-semibold
                tracking-[0.32em]
                uppercase
                text-[var(--color-primary)]
              "
            >
              Why Choose Aurora
            </motion.p>

            {/* =================================================
                HEADING
            ================================================= */}

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
              }}
              className="
                mt-2
                font-serif
                font-medium
                text-[clamp(2.3rem,4vw,4rem)]
                leading-[0.98]
                tracking-[-0.035em]
                text-[var(--color-text)]
              "
            >
              Learn. Perform. Belong.
            </motion.h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

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
                mt-5
                max-w-[600px]
                text-sm
                sm:text-[15px]
                leading-[1.6]
                text-[var(--color-text-secondary)]
              "
            >
              We offer more than just acting classes. We provide real
              industry exposure, personalized mentorship and a creative
              community to help you achieve your dreams.
            </motion.p>

            {/* =================================================
                BENEFITS
            ================================================= */}

            <div
              className="
                mt-8
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-x-8
                gap-y-7
              "
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
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
                      duration: 0.5,
                      delay: 0.35 + index * 0.12,
                    }}
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >
                    {/* Icon */}

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: -3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        shrink-0
                        w-12
                        h-12
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-[var(--color-primary)]
                        text-[var(--color-accent)]
                        shadow-[var(--shadow-purple)]
                      "
                    >
                      <Icon
                        className="w-6 h-6"
                        strokeWidth={1.6}
                      />
                    </motion.div>

                    {/* Content */}

                    <div className="pt-0.5">
                      <h3
                        className="
                          text-sm
                          font-bold
                          leading-tight
                          text-[var(--color-text)]
                        "
                      >
                        {benefit.title}
                        <br />
                        {benefit.subtitle}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          text-xs
                          leading-[1.45]
                          text-[var(--color-text-secondary)]
                          max-w-[190px]
                        "
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;