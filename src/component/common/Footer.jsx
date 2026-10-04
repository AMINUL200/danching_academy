import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  Drama,
} from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Courses",
      url: "/courses",
    },
    {
      name: "Success Stories",
      url: "/success-stories",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "#",
      icon: Instagram,
    },
    {
      name: "Facebook",
      url: "#",
      icon: Facebook,
    },
    {
      name: "YouTube",
      url: "#",
      icon: Youtube,
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
    },
  ];

  /* =====================================================
     MOTION VARIANTS
  ===================================================== */

  const footerContainer = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -50,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 50,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      y: 15,
    },

    visible: {
      opacity: 1,
      scale: 1,
      y: 0,

      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const linkAnimation = {
    hidden: {
      opacity: 0,
      x: -15,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="footer relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={footerContainer}
    >
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-12
            lg:gap-20
            py-14
            lg:py-16
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div variants={fadeLeft}>
            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
                group
              "
            >
              {/* Logo */}

              <motion.div
                className="
                  text-[var(--color-accent)]
                  text-5xl
                  font-serif
                  leading-none
                "
                whileHover={{
                  scale: 1.08,
                  rotate: -3,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                A
              </motion.div>

              <div>
                <div
                  className="
                    text-[var(--color-white)]
                    text-2xl
                    font-serif
                    tracking-[0.12em]
                    leading-none
                  "
                >
                  AURORA
                </div>

                <div
                  className="
                    mt-1
                    text-[var(--color-white)]
                    text-[9px]
                    tracking-[0.25em]
                    opacity-80
                  "
                >
                  ACTING ACADEMY
                </div>
              </div>
            </Link>

            {/* Tagline */}

            <motion.p
              variants={fadeUp}
              className="
                mt-7
                text-sm
                text-[var(--color-text-muted)]
                max-w-[300px]
                leading-6
              "
            >
              Nurturing Talent. Creating Futures.
            </motion.p>

            {/* Social Icons */}

            <motion.div
              className="flex items-center gap-3 mt-6"
              variants={footerContainer}
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    variants={socialAnimation}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-[var(--color-border)]
                      flex
                      items-center
                      justify-center
                      text-[var(--color-white)]
                      hover:text-[var(--color-accent)]
                      hover:border-[var(--color-accent)]
                      hover:bg-[rgba(231,185,94,0.08)]
                      transition-colors
                      duration-300
                    "
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <motion.div variants={fadeUp}>
            <h3
              className="
                text-base
                font-semibold
                text-[var(--color-white)]
                mb-6
              "
            >
              Quick Links
            </h3>

            <motion.ul
              className="space-y-3"
              variants={footerContainer}
            >
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={linkAnimation}
                >
                  <Link
                    to={link.url}
                    className="
                      inline-flex
                      text-sm
                      text-[var(--color-text-muted)]
                      hover:text-[var(--color-accent)]
                      transition-colors
                      duration-300
                    "
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <motion.div
            variants={fadeRight}
            className="relative"
          >
            <h3
              className="
                text-base
                font-semibold
                text-[var(--color-white)]
                mb-6
              "
            >
              Contact Us
            </h3>

            <motion.div
              className="space-y-4"
              variants={footerContainer}
            >
              {/* Location */}

              <motion.div
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <MapPin
                  className="
                    w-5
                    h-5
                    shrink-0
                    mt-0.5
                    text-[var(--color-accent)]
                  "
                />

                <span
                  className="
                    text-sm
                    text-[var(--color-text-muted)]
                  "
                >
                  Mumbai, India
                </span>
              </motion.div>

              {/* Email */}

              <motion.a
                href="mailto:info@auroraactingacademy.com"
                variants={fadeUp}
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-[var(--color-text-muted)]
                  hover:text-[var(--color-accent)]
                  transition-colors
                "
              >
                <Mail
                  className="
                    w-5
                    h-5
                    shrink-0
                    text-[var(--color-accent)]
                  "
                />

                <span>
                  info@auroraactingacademy.com
                </span>
              </motion.a>

              {/* Phone */}

              <motion.a
                href="tel:+919876543210"
                variants={fadeUp}
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-[var(--color-text-muted)]
                  hover:text-[var(--color-accent)]
                  transition-colors
                "
              >
                <Phone
                  className="
                    w-5
                    h-5
                    shrink-0
                    text-[var(--color-accent)]
                  "
                />

                <span>
                  +91 98765 43210
                </span>
              </motion.a>
            </motion.div>

            {/* =================================================
                DECORATIVE THEATRE AREA
            ================================================= */}

            <motion.div
              className="
                hidden
                lg:flex
                absolute
                right-0
                top-0
                flex-col
                items-center
                opacity-20
                pointer-events-none
              "
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 0.2,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Drama
                  className="
                    w-20
                    h-20
                    text-[var(--color-primary-light)]
                  "
                  strokeWidth={1}
                />
              </motion.div>

              <div
                className="
                  mt-1
                  text-3xl
                  font-serif
                  italic
                  leading-tight
                  text-[var(--color-primary-light)]
                  text-right
                "
              >
                Act
                <br />
                Create
                <br />
                Belong
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}

        <motion.div
          variants={fadeUp}
          className="
            border-t
            border-[var(--color-border)]
            py-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p
            className="
              text-xs
              text-[var(--color-text-muted)]
              text-center
              md:text-left
            "
          >
            © {new Date().getFullYear()} Aurora Acting Academy.
            All Rights Reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-4
              text-xs
            "
          >
            <Link
              to="/privacy-policy"
              className="
                text-[var(--color-text-muted)]
                hover:text-[var(--color-accent)]
                transition-colors
              "
            >
              Privacy Policy
            </Link>

            <span
              className="
                text-[var(--color-text-muted)]
                opacity-50
              "
            >
              |
            </span>

            <Link
              to="/terms"
              className="
                text-[var(--color-text-muted)]
                hover:text-[var(--color-accent)]
                transition-colors
              "
            >
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;