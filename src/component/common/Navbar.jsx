import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, ChevronDown, User, LogOut, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/* =====================================================
   MOTION VARIANTS
===================================================== */

const navbarVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const logoVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.25, staggerChildren: 0.08 },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const dropdownContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.03 },
  },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
};

/* =====================================================
   NAVBAR
===================================================== */

const Navbar = ({ toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const dropdownRefs = useRef({});
  const navigate = useNavigate();
  const location = useLocation();

  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =====================================================
     NAV LINKS
  ===================================================== */

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    {
      id: "courses",
      label: "Courses",
      dropdown: [
        { id: "beginner", label: "Beginner Acting", path: "/courses/beginner" },
        { id: "advanced", label: "Advanced Acting", path: "/courses/advanced" },
        { id: "screen-acting", label: "Screen Acting", path: "/courses/screen-acting" },
        { id: "audition", label: "Audition Preparation", path: "/courses/audition" },
      ],
    },
    { id: "success-stories", label: "Success Stories", path: "/success-stories" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const isAuthenticated = false;
  const userData = { user_type: 2 };

  /* =====================================================
     DROPDOWN HELPERS
  ===================================================== */

  const getParentDropdownId = (dropdownId) => {
    if (dropdownId.includes("-sub-")) return dropdownId.split("-sub-")[0];
    return null;
  };

  const isChildDropdown = (childId, parentId) =>
    childId.startsWith(parentId + "-sub-");

  const toggleDropdown = useCallback((dropdownId) => {
    setOpenDropdowns((prev) => {
      const newState = { ...prev };

      if (!dropdownId.includes("-sub-")) {
        Object.keys(newState).forEach((key) => {
          if (key !== dropdownId && !key.includes("-sub-")) {
            newState[key] = false;
            Object.keys(newState).forEach((subKey) => {
              if (isChildDropdown(subKey, key)) newState[subKey] = false;
            });
          }
        });
      } else {
        const parentId = getParentDropdownId(dropdownId);
        Object.keys(newState).forEach((key) => {
          if (key !== dropdownId && getParentDropdownId(key) === parentId) {
            newState[key] = false;
          }
        });
      }

      newState[dropdownId] = !prev[dropdownId];
      return newState;
    });
  }, []);

  /* =====================================================
     CLOSE ON OUTSIDE CLICK
  ===================================================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      let clickedOutside = true;
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && ref.contains(event.target)) clickedOutside = false;
      });
      if (clickedOutside) setOpenDropdowns({});
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* =====================================================
     NAVIGATION + LOGOUT
  ===================================================== */

  const handleNavClick = useCallback(
    (path) => {
      navigate(path);
      setOpenDropdowns({});
    },
    [navigate]
  );

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/");
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  /* =====================================================
     DROPDOWN ITEM
  ===================================================== */

  const renderDropdownItem = (item, level = 1) => {
    const hasSubDropdown = item.dropdown && item.dropdown.length > 0;
    const dropdownKey = `${item.id}-sub-${level}`;
    const isOpen = openDropdowns[dropdownKey];

    return (
      <div key={item.id} className="relative">
        {hasSubDropdown ? (
          <button
            type="button"
            onClick={() => toggleDropdown(dropdownKey)}
            className={`
              w-full flex items-center justify-between
              px-4 py-2 text-sm text-left
              text-[var(--color-text)]
              hover:bg-[var(--color-cream)]
              hover:text-[var(--color-primary)]
              cursor-pointer transition-colors
              ${level > 1 ? "pl-8" : ""}
            `}
          >
            <span>{item.label}</span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        ) : (
          <RouterLink
            to={item.path}
            onClick={() => setOpenDropdowns({})}
            className={`
              block px-4 py-2 text-sm
              text-[var(--color-text)]
              hover:bg-[var(--color-cream)]
              hover:text-[var(--color-primary)]
              transition-colors
              ${level > 1 ? "pl-8" : ""}
            `}
          >
            {item.label}
          </RouterLink>
        )}

        <AnimatePresence initial={false}>
          {hasSubDropdown && isOpen && (
            <motion.div
              key={dropdownKey}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden bg-[var(--color-cream)] border-l-2 border-[var(--color-accent)] ml-2"
            >
              {item.dropdown.map((subItem) => (
                <div key={subItem.id}>
                  {renderDropdownItem(subItem, level + 1)}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  /* =====================================================
     NAV ITEM
  ===================================================== */

  const renderNavItem = (item) => {
    const hasDropdown = item.dropdown && item.dropdown.length > 0;
    const isOpen = openDropdowns[item.id];
    const active = !hasDropdown && isActive(item.path);

    return (
      <div
        key={item.id}
        className="relative"
        ref={(el) => {
          dropdownRefs.current[item.id] = el;
        }}
      >
        {hasDropdown ? (
          <button
            type="button"
            onClick={() => toggleDropdown(item.id)}
            className={`
              relative flex items-center gap-1
              px-3 py-2 text-sm font-medium
              cursor-pointer transition-colors duration-200
              ${
                isOpen
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-white)]"
              }
              hover:text-[var(--color-accent)]
            `}
          >
            <span>{item.label}</span>

            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>

            <AnimatePresence>
              {isOpen && (
                <motion.span
                  key={`underline-${item.id}`}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--color-accent)] origin-center"
                />
              )}
            </AnimatePresence>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleNavClick(item.path)}
            className={`
              relative px-3 py-2 text-sm font-medium
              cursor-pointer transition-colors duration-200
              ${
                active
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-white)]"
              }
              hover:text-[var(--color-accent)]
            `}
          >
            {item.label}

            <AnimatePresence>
              {active && (
                <motion.span
                  key={`underline-${item.id}`}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--color-accent)] origin-center"
                />
              )}
            </AnimatePresence>
          </button>
        )}

        {/* Main dropdown — centered under the nav item */}
        <AnimatePresence>
          {hasDropdown && isOpen && (
            <motion.div
              key={`dropdown-${item.id}`}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ transformOrigin: "top center" }}
              className="
                absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64
                bg-[var(--color-white)]
                border border-[var(--color-border)]
                rounded-[var(--radius-md)]
                shadow-[var(--shadow-lg)]
                overflow-hidden z-50
              "
            >
              <motion.div
                className="py-2"
                initial="hidden"
                animate="visible"
                variants={dropdownContainerVariants}
              >
                {item.dropdown.map((dropdownItem) => (
                  <motion.div key={dropdownItem.id} variants={dropdownItemVariants}>
                    {renderDropdownItem(dropdownItem)}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`
        fixed top-0 left-0 w-full z-50
        transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out
        ${
          scrolled
            ? "bg-[var(--color-primary)]/95 shadow-[var(--shadow-md)] backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      {/*
        LAYOUT:
        - Desktop (md+): 3 columns → Logo (left) | Nav (center) | Actions (right)
        - Mobile:        2 columns → Logo (left) | Menu button (right)
      */}
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 items-center gap-4">

        {/* =================================================
            LEFT: LOGO
        ================================================= */}
        <motion.div
          variants={logoVariants}
          className="flex items-center cursor-pointer justify-self-start shrink-0"
          onClick={() => navigate("/")}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="text-[var(--color-accent)] text-4xl font-serif leading-none"
              whileHover={{ scale: 1.08, rotate: -3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              A
            </motion.div>

            <div className="leading-none">
              <div className="text-[var(--color-white)] text-xl md:text-2xl font-serif tracking-[0.12em]">
                AURORA
              </div>
              <div className="text-[var(--color-white)] text-[8px] md:text-[9px] tracking-[0.22em] opacity-80 mt-1">
                ACTING ACADEMY
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            CENTER: DESKTOP NAVIGATION
        ================================================= */}
        <motion.nav
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center justify-center gap-1 lg:gap-2 justify-self-center"
        >
          {navLinks.map((item) => (
            <motion.div key={item.id} variants={navItemVariants}>
              {renderNavItem(item)}
            </motion.div>
          ))}
        </motion.nav>

        {/* =================================================
            RIGHT: APPLY NOW + AUTH ACTIONS
        ================================================= */}
        <div className="flex items-center justify-end justify-self-end gap-3">

          {/* APPLY NOW (desktop only) */}
          <motion.div
            variants={navItemVariants}
            className="hidden md:block"
          >
            <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <RouterLink
                to="/contact"
                className="btn-primary !px-6 !py-2.5 !text-sm !shadow-none inline-flex items-center gap-2"
              >
                <span>Apply Now</span>
                <motion.span
                  className="text-base inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </RouterLink>
            </motion.div>
          </motion.div>

          {/* LOGIN (hidden) */}
          {!isAuthenticated && (
            <RouterLink to="/login" className="hidden">
              <User className="w-4 h-4" />
              <span>Login</span>
            </RouterLink>
          )}

          {/* LOGOUT */}
          {isAuthenticated && userData?.user_type === 4 && (
            <motion.button
              onClick={handleLogout}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary hidden md:inline-flex"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </motion.button>
          )}

          {/* DASHBOARD */}
          {isAuthenticated && userData?.user_type !== 4 && (
            <motion.div variants={navItemVariants} className="hidden md:block">
              <RouterLink to="/dashboard" className="btn-primary">
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </RouterLink>
            </motion.div>
          )}

          {/* MOBILE MENU BUTTON (right side, mobile only) */}
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.85 }}
            className="md:hidden text-[var(--color-white)] hover:text-[var(--color-accent)] cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-7 h-7" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;