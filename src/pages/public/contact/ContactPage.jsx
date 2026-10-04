import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  Send,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Connect your API here
      console.log("Contact Form:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Mumbai, India",
      description: "Come visit our acting academy",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@auroraactingacademy.com",
      description: "We usually reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Mon – Sat, 9:00 AM – 6:00 PM",
    },
    {
      icon: Clock,
      title: "Academy Hours",
      value: "9:00 AM – 6:00 PM",
      description: "Monday to Saturday",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      url: "#",
      label: "Instagram",
    },
    {
      icon: Facebook,
      url: "#",
      label: "Facebook",
    },
    {
      icon: Youtube,
      url: "#",
      label: "YouTube",
    },
    {
      icon: Linkedin,
      url: "#",
      label: "LinkedIn",
    },
  ];

  return (
    <main className="bg-[var(--color-white)]">
      {/* =====================================================
          CONTACT HERO
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
        {/* =====================================================
      BACKGROUND IMAGE
  ===================================================== */}

        <div className="absolute inset-0">
          <img
            src="/image/contact-hero.png"
            alt="Aurora Acting Academy contact"
            className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        object-center
      "
          />

          {/* LEFT DARK OVERLAY */}

          <div
            className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[var(--color-dark)]
        via-[rgba(8,5,20,0.82)]
        via-[30%]
        to-[rgba(8,5,20,0.15)]
      "
          />

          {/* PURPLE CINEMATIC GLOW */}

          <div
            className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_72%_40%,rgba(91,35,126,0.28),transparent_38%)]
      "
          />

          {/* BOTTOM FADE */}

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
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
        max-w-[650px]
        pt-16
        lg:pt-20
      "
          >
            {/* EYEBROW */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
          text-[10px]
          sm:text-xs
          uppercase
          tracking-[0.35em]
          font-semibold
          text-[var(--color-accent)]
        "
            >
              Contact Aurora
            </motion.p>

            {/* HEADING */}

            <motion.h1
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
                delay: 0.25,
                ease: "easeOut",
              }}
              className="
          mt-4
          font-serif
          font-medium
          text-[clamp(3rem,6vw,5.8rem)]
          leading-[0.88]
          tracking-[-0.045em]
          text-[var(--color-white)]
        "
            >
              Let's Create
              <br />
              <span className="text-[var(--color-accent)]">Something</span>
              <br />
              Extraordinary.
            </motion.h1>

            {/* DESCRIPTION */}

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
                delay: 0.4,
              }}
              className="
          mt-6
          max-w-[550px]
          text-sm
          sm:text-base
          leading-[1.65]
          text-white/75
        "
            >
              Whether you're taking your first step into acting or preparing for
              your next big opportunity, we'd love to hear from you.
            </motion.p>

            {/* JOURNEY LINE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="
          mt-8
          flex
          items-center
          gap-3
        "
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 42,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
                className="
            block
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
            text-white/65
          "
              >
                Your journey starts here
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
      RIGHT SIDE LIGHT EFFECT
  ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.4,
          }}
          className="
      pointer-events-none
      absolute
      right-[8%]
      top-[20%]
      w-[260px]
      h-[260px]
      rounded-full
      bg-[var(--color-primary)]
      blur-[120px]
      opacity-20
    "
        />
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section
        className="
          relative
          py-16
          lg:py-20
          bg-[var(--color-ivory)]
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
              lg:grid-cols-[0.85fr_1.15fr]
              gap-10
              lg:gap-16
              items-start
            "
          >
            {/* =================================================
                LEFT INFORMATION
            ================================================= */}

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
                Get In Touch
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
                We'd Love To
                <br />
                Hear From You.
              </h2>

              <p
                className="
                  mt-5
                  max-w-[500px]
                  text-sm
                  sm:text-[15px]
                  leading-[1.7]
                  text-[var(--color-text-secondary)]
                "
              >
                Have questions about our programs, auditions, workshops or
                admissions? Reach out to our team and we'll help you find the
                right path.
              </p>

              {/* Contact Cards */}

              <div className="mt-9 space-y-5">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
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
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="
                          flex
                          items-start
                          gap-4
                          group
                        "
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          y: -2,
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
                        <Icon className="w-5 h-5" strokeWidth={1.7} />
                      </motion.div>

                      <div>
                        <h3
                          className="
                              text-sm
                              font-semibold
                              text-[var(--color-text)]
                            "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                              mt-0.5
                              text-sm
                              font-medium
                              text-[var(--color-primary)]
                            "
                        >
                          {item.value}
                        </p>

                        <p
                          className="
                              mt-1
                              text-xs
                              text-[var(--color-text-secondary)]
                            "
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social */}

              <div className="mt-9">
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[var(--color-text)]
                  "
                >
                  Follow Aurora
                </p>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mt-4
                  "
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        aria-label={social.label}
                        whileHover={{
                          y: -4,
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.92,
                        }}
                        className="
                            w-10
                            h-10
                            rounded-full
                            border
                            border-[var(--color-border)]
                            flex
                            items-center
                            justify-center
                            text-[var(--color-primary)]
                            hover:text-[var(--color-accent)]
                            hover:border-[var(--color-accent)]
                            transition-colors
                            duration-300
                          "
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* =================================================
                CONTACT FORM
            ================================================= */}

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
              className="
                bg-[var(--color-white)]
                rounded-[var(--radius-lg)]
                border
                border-[var(--color-border)]
                shadow-[var(--shadow-lg)]
                p-6
                sm:p-8
                lg:p-10
              "
            >
              <div className="mb-8">
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
                  Start Your Journey
                </p>

                <h2
                  className="
                    mt-2
                    font-serif
                    text-3xl
                    sm:text-4xl
                    text-[var(--color-text)]
                  "
                >
                  Send Us A Message
                </h2>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[var(--color-text-secondary)]
                  "
                >
                  Fill in your details and our team will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-5
                  "
                >
                  <div>
                    <label
                      className="
                        block
                        mb-2
                        text-xs
                        font-semibold
                        text-[var(--color-text)]
                      "
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="
                        w-full
                        h-12
                        px-4
                        rounded-[var(--radius-md)]
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-white)]
                        text-sm
                        text-[var(--color-text)]
                        placeholder:text-[var(--color-text-muted)]
                        outline-none
                        focus:border-[var(--color-primary)]
                        focus:ring-2
                        focus:ring-[var(--color-primary)]/10
                        transition-all
                      "
                    />
                  </div>

                  <div>
                    <label
                      className="
                        block
                        mb-2
                        text-xs
                        font-semibold
                        text-[var(--color-text)]
                      "
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="
                        w-full
                        h-12
                        px-4
                        rounded-[var(--radius-md)]
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-white)]
                        text-sm
                        text-[var(--color-text)]
                        placeholder:text-[var(--color-text-muted)]
                        outline-none
                        focus:border-[var(--color-primary)]
                        focus:ring-2
                        focus:ring-[var(--color-primary)]/10
                        transition-all
                      "
                    />
                  </div>
                </div>

                {/* Phone + Course */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-5
                  "
                >
                  <div>
                    <label
                      className="
                        block
                        mb-2
                        text-xs
                        font-semibold
                        text-[var(--color-text)]
                      "
                    >
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="
                        w-full
                        h-12
                        px-4
                        rounded-[var(--radius-md)]
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-white)]
                        text-sm
                        text-[var(--color-text)]
                        placeholder:text-[var(--color-text-muted)]
                        outline-none
                        focus:border-[var(--color-primary)]
                        focus:ring-2
                        focus:ring-[var(--color-primary)]/10
                        transition-all
                      "
                    />
                  </div>

                  <div>
                    <label
                      className="
                        block
                        mb-2
                        text-xs
                        font-semibold
                        text-[var(--color-text)]
                      "
                    >
                      Interested In
                    </label>

                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="
                        w-full
                        h-12
                        px-4
                        rounded-[var(--radius-md)]
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-white)]
                        text-sm
                        text-[var(--color-text)]
                        outline-none
                        focus:border-[var(--color-primary)]
                        focus:ring-2
                        focus:ring-[var(--color-primary)]/10
                        transition-all
                      "
                    >
                      <option value="">Select a program</option>

                      <option value="beginner">Beginner Acting Program</option>

                      <option value="advanced">Advanced Acting Program</option>

                      <option value="screen">
                        Screen Acting & Audition Prep
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}

                <div>
                  <label
                    className="
                      block
                      mb-2
                      text-xs
                      font-semibold
                      text-[var(--color-text)]
                    "
                  >
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us a little about yourself and your acting goals..."
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-[var(--radius-md)]
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-white)]
                      text-sm
                      leading-6
                      text-[var(--color-text)]
                      placeholder:text-[var(--color-text-muted)]
                      outline-none
                      resize-none
                      focus:border-[var(--color-primary)]
                      focus:ring-2
                      focus:ring-[var(--color-primary)]/10
                      transition-all
                    "
                  />
                </div>

                {/* Submit */}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    y: -2,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    w-full
                    h-13
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-[var(--radius-md)]
                    bg-primary
                    text-[var(--color-white)]
                    text-sm
                    font-semibold
                    shadow-[var(--shadow-purple)]
                    cursor-pointer
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="
                          w-4
                          h-4
                          border-2
                          border-white/30
                          border-t-white
                          rounded-full
                          animate-spin
                        "
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP SECTION
      ===================================================== */}

      <section
        className="
          relative
          bg-[var(--color-dark)]
          py-10
          lg:py-14
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
          {/* Map heading */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-end
              sm:justify-between
              gap-4
              mb-6
            "
          >
            <div>
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
                Find Aurora
              </p>

              <h2
                className="
                  mt-2
                  font-serif
                  text-3xl
                  sm:text-4xl
                  text-[var(--color-white)]
                "
              >
                Visit Our Academy
              </h2>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                text-white/60
              "
            >
              <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
              Mumbai, India
            </div>
          </motion.div>

          {/* =================================================
              MAP
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              w-full
              h-[350px]
              lg:h-[450px]
              overflow-hidden
              rounded-[var(--radius-lg)]
              border
              border-[var(--color-border)]
              shadow-[var(--shadow-lg)]
            "
          >
            <iframe
              title="Aurora Acting Academy Location"
              src="https://www.google.com/maps?q=Mumbai%2C%20India&output=embed"
              className="
                absolute
                inset-0
                w-full
                h-full
                border-0
                grayscale-[0.2]
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map label */}

            <div
              className="
                absolute
                left-5
                bottom-5
                z-10
                bg-[var(--color-dark)]
                border
                border-[var(--color-border)]
                rounded-[var(--radius-md)]
                px-4
                py-3
                shadow-[var(--shadow-lg)]
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    w-9
                    h-9
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-[var(--color-primary)]
                    text-[var(--color-accent)]
                  "
                >
                  <MapPin className="w-4 h-4" />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-[var(--color-white)]
                    "
                  >
                    Aurora Acting Academy
                  </p>

                  <p
                    className="
                      text-[10px]
                      text-white/60
                      mt-0.5
                    "
                  >
                    Mumbai, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
