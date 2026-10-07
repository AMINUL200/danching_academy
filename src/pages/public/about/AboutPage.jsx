import React from "react";
import { motion } from "motion/react";
import {
  Theater,
  Users,
  Star,
  Clapperboard,
  Heart,
  Lightbulb,
  Target,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const features = [
    {
      icon: Theater,
      title: "Practical Learning",
      description:
        "Learn through scenes, exercises, rehearsals and real performance situations.",
    },
    {
      icon: Users,
      title: "Small Batch Training",
      description:
        "Personal attention and meaningful feedback in a focused learning environment.",
    },
    {
      icon: Clapperboard,
      title: "Industry Exposure",
      description:
        "Understand auditions, screen presence and the professional acting environment.",
    },
  ];

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description:
        "We encourage every student to continuously improve their craft.",
    },
    {
      icon: Heart,
      title: "Confidence",
      description:
        "We create a supportive environment where students can express themselves freely.",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description:
        "We help students discover their unique voice, perspective and performance style.",
    },
    {
      icon: Target,
      title: "Purpose",
      description:
        "Training is designed to help aspiring actors move confidently toward their goals.",
    },
  ];

  return (
    <main className="bg-[var(--color-white)]">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-[560px]
          lg:min-h-[650px]
          overflow-hidden
          bg-[var(--color-dark)]
        "
      >
        {/* Background */}

        <div className="absolute inset-0">

          <img
            src="/image/about-hero.png"
            alt="Aurora Acting Academy"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-[65%_center]
              sm:object-center
            "
          />

          {/* Left dark overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[var(--color-dark)]
              via-[rgba(8,5,20,0.84)]
              via-[58%]
              to-transparent
            "
          />

          {/* Purple cinematic glow */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_75%_40%,rgba(91,35,126,0.28),transparent_40%)]
            "
          />

          {/* Bottom fade */}

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

        {/* Content */}

        <div
          className="
            relative
            z-10
            max-w-[1440px]
            mx-auto
            min-h-[560px]
            lg:min-h-[650px]
            px-6
            sm:px-8
            lg:px-12
            flex
            items-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="max-w-[680px] pt-16"
          >
            <p
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.35em]
                font-semibold
                text-[var(--color-accent)]
              "
            >
              About Aurora
            </p>

            <h1
              className="
                mt-4
                font-serif
                text-[clamp(3rem,6vw,5.8rem)]
                leading-[0.88]
                tracking-[-0.045em]
                text-[var(--color-white)]
              "
            >
              More Than
              <br />

              <span className="text-[var(--color-accent)]">
                An Acting
              </span>

              <br />

              Academy.
            </h1>

            <p
              className="
                mt-6
                max-w-[570px]
                text-sm
                sm:text-base
                leading-[1.7]
                text-white/75
              "
            >
              We believe acting is more than performance.
              It is a way to express, connect, discover and
              create something meaningful.
            </p>

            <div
              className="
                mt-8
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  w-10
                  h-[2px]
                  bg-[var(--color-accent)]
                "
              />

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.25em]
                  text-white/60
                "
              >
                Learn. Perform. Belong.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section
        className="
          py-20
          lg:py-28
          bg-[var(--color-ivory)]
        "
      >
        <div
          className="
            max-w-[1300px]
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
              lg:grid-cols-2
              gap-12
              lg:gap-20
              items-center
            "
          >

            {/* Image */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
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
              }}
              className="
                relative
                h-[420px]
                sm:h-[500px]
                overflow-hidden
                rounded-[var(--radius-lg)]
              "
            >
              <img
                src="/image/about-story.png"
                alt="Acting students rehearsing"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* Quote */}

              <div
                className="
                  absolute
                  left-6
                  bottom-6
                  max-w-[280px]
                  p-5
                  bg-[rgba(8,5,20,0.85)]
                  backdrop-blur-md
                  border
                  border-white/10
                  rounded-[var(--radius-md)]
                "
              >
                <p
                  className="
                    font-serif
                    text-xl
                    leading-tight
                    text-white
                  "
                >
                  "Every performance
                  begins with the courage
                  to begin."
                </p>

                <div
                  className="
                    mt-3
                    w-8
                    h-[2px]
                    bg-[var(--color-accent)]
                  "
                />
              </div>
            </motion.div>

            {/* Text */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
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
              }}
            >
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.3em]
                  font-semibold
                  text-[var(--color-primary)]
                "
              >
                Our Story
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-[clamp(2.5rem,4vw,4rem)]
                  leading-[0.95]
                  tracking-[-0.035em]
                  text-[var(--color-text)]
                "
              >
                Where Passion
                <br />
                Becomes Performance.
              </h2>

              <p
                className="
                  mt-6
                  text-sm
                  sm:text-[15px]
                  leading-[1.8]
                  text-[var(--color-text-secondary)]
                "
              >
                Aurora Acting Academy was created for
                aspiring performers who want to develop
                their craft in a practical and supportive
                environment.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  sm:text-[15px]
                  leading-[1.8]
                  text-[var(--color-text-secondary)]
                "
              >
                From the first rehearsal to the audition
                room, we focus on helping students build
                confidence, understand the craft and
                discover their own authentic performance
                style.
              </p>

              <Link
                to="/contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  py-3
                  rounded-[var(--radius-full)]
                  bg-[var(--color-primary)]
                  text-white
                  text-sm
                  font-semibold
                  shadow-[var(--shadow-purple)]
                "
              >
                Start Your Journey

                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT MAKES US DIFFERENT
      ===================================================== */}

      <section
        className="
          py-20
          lg:py-24
          bg-[var(--color-white)]
        "
      >
        <div
          className="
            max-w-[1200px]
            mx-auto
            px-6
            sm:px-8
          "
        >
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
            }}
            className="text-center max-w-[700px] mx-auto"
          >
            <p
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.3em]
                font-semibold
                text-[var(--color-primary)]
              "
            >
              Why Aurora
            </p>

            <h2
              className="
                mt-3
                font-serif
                text-[clamp(2.5rem,4vw,4rem)]
                leading-[0.95]
                text-[var(--color-text)]
              "
            >
              Training That Goes
              <br />
              Beyond The Classroom.
            </h2>

            <p
              className="
                mt-5
                text-sm
                sm:text-[15px]
                leading-7
                text-[var(--color-text-secondary)]
              "
            >
              We combine practical training, personal
              mentorship and industry-focused learning to
              create a complete acting experience.
            </p>
          </motion.div>

          {/* Features */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-5
              mt-14
            "
          >
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="
                    p-7
                    rounded-[var(--radius-lg)]
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-white)]
                    shadow-[var(--shadow-sm)]
                    hover:shadow-[var(--shadow-lg)]
                    transition-shadow
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      flex
                      items-center
                      justify-center
                      bg-[var(--color-primary)]
                      text-[var(--color-accent)]
                    "
                  >
                    <Icon
                      className="w-6 h-6"
                      strokeWidth={1.6}
                    />
                  </div>

                  <h3
                    className="
                      mt-6
                      font-serif
                      text-2xl
                      text-[var(--color-text)]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-[var(--color-text-secondary)]
                    "
                  >
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRAINING PHILOSOPHY
      ===================================================== */}

      <section
        className="
          py-20
          lg:py-28
          bg-[var(--color-dark)]
          relative
          overflow-hidden
        "
      >
        {/* Decorative glow */}

        <div
          className="
            absolute
            right-[-150px]
            top-[-150px]
            w-[450px]
            h-[450px]
            rounded-full
            bg-[var(--color-primary)]
            blur-[150px]
            opacity-20
          "
        />

        <div
          className="
            relative
            z-10
            max-w-[1200px]
            mx-auto
            px-6
            sm:px-8
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[0.8fr_1.2fr]
              gap-12
              lg:gap-20
              items-center
            "
          >
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
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.3em]
                  font-semibold
                  text-[var(--color-accent)]
                "
              >
                Our Philosophy
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-[clamp(2.5rem,4vw,4rem)]
                  leading-[0.95]
                  text-white
                "
              >
                Learn.
                <br />
                Perform.
                <br />
                Belong.
              </h2>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-white/65
                  max-w-[420px]
                "
              >
                Great acting is not only about technique.
                It is about observation, vulnerability,
                imagination and the confidence to tell a
                story honestly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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
                      delay: index * 0.1,
                    }}
                    className="
                      p-6
                      rounded-[var(--radius-lg)]
                      border
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-sm
                    "
                  >
                    <Icon
                      className="
                        w-6
                        h-6
                        text-[var(--color-accent)]
                      "
                      strokeWidth={1.5}
                    />

                    <h3
                      className="
                        mt-5
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-6
                        text-white/55
                      "
                    >
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="
          py-20
          lg:py-24
          bg-[var(--color-ivory)]
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          }}
          className="
            max-w-[900px]
            mx-auto
            px-6
            text-center
          "
        >
          <p
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.3em]
              font-semibold
              text-[var(--color-primary)]
            "
          >
            Ready To Begin?
          </p>

          <h2
            className="
              mt-3
              font-serif
              text-[clamp(2.7rem,5vw,4.8rem)]
              leading-[0.95]
              text-[var(--color-text)]
            "
          >
            Your Story Starts
            <br />
            With You.
          </h2>

          <p
            className="
              mt-5
              max-w-[600px]
              mx-auto
              text-sm
              sm:text-[15px]
              leading-7
              text-[var(--color-text-secondary)]
            "
          >
            Take the first step toward becoming the actor
            you want to be.
          </p>

          <Link
            to="/contact"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              px-7
              py-3.5
              rounded-[var(--radius-full)]
              bg-[var(--color-accent)]
              text-[var(--color-dark)]
              text-sm
              font-semibold
              shadow-[var(--shadow-gold)]
            "
          >
            Apply Now

            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;