import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  X,
  ChevronDown,
  Home,
  Info,
  Film,
  Star,
  Mail,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/* =====================================================
   MOTION VARIANTS
===================================================== */

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] },
  },
};

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.05 },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const dropdownContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.02 },
  },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

/* =====================================================
   SIDEBAR
===================================================== */

const SideBar = ({ toggleMenu, isOpen }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const dropdownRefs = useRef({});
  const navigate = useNavigate();
  const location = useLocation();

  /* =====================================================
     NAV LINKS — mirrors Navbar exactly
  ===================================================== */

  const sidebarLinks = [
    {
      id: "home",
      label: "Home",
      path: "/",
      icon: <Home className="w-5 h-5" />,
    },
    {
      id: "about",
      label: "About",
      path: "/about",
      icon: <Info className="w-5 h-5" />,
    },
    {
      id: "courses",
      label: "Courses",
      icon: <Film className="w-5 h-5" />,
      dropdown: [
        { id: "beginner", label: "Beginner Acting", path: "/courses/beginner" },
        { id: "advanced", label: "Advanced Acting", path: "/courses/advanced" },
        { id: "screen-acting", label: "Screen Acting", path: "/courses/screen-acting" },
        { id: "audition", label: "Audition Preparation", path: "/courses/audition" },
      ],
    },
    {
      id: "success-stories",
      label: "Success Stories",
      path: "/success-stories",
      icon: <Star className="w-5 h-5" />,
    },
    {
      id: "contact",
      label: "Contact",
      path: "/contact",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  const isAuthenticated = false;
  const userData = { user_type: 2 };

  /* =====================================================
     CLOSE SIDEBAR ON ROUTE CHANGE
  ===================================================== */

  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
    setOpenDropdowns({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  /* =====================================================
     CLOSE DROPDOWNS ON OUTSIDE CLICK
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
     DROPDOWN HELPERS
  ===================================================== */

  const getParentDropdownId = (dropdownId) => {
    if (dropdownId.includes("-sub-")) return dropdownId.split("-sub-")[0];
    return null;
  };

  const isChildDropdown = (childId, parentId) =>
    childId.startsWith(parentId + "-sub-");

  const toggleDropdown = (dropdownId) => {
    setOpenDropdowns((prev) => {
      const newState = { ...prev };

      if (!dropdownId.includes("-sub-")) {
        // Parent dropdown — close other parents + their children
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
  };

  /* =====================================================
     NAVIGATION + LOGOUT
  ===================================================== */

  const handleNavClick = (path) => {
    if (path) {
      navigate(path);
      setOpenDropdowns({});
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/");
    toggleMenu();
  };

  const isActivePath = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  /* =====================================================
     DROPDOWN ITEM (recursive)
  ===================================================== */

  const renderDropdownItem = (item, level = 1) => {
    const hasSubDropdown = item.dropdown && item.dropdown.length > 0;
    const dropdownKey = `${item.id}-sub-${level}`;
    const isOpen = openDropdowns[dropdownKey];
    const active = item.path && isActivePath(item.path);

    return (
      <div key={item.id} className="relative">
        {hasSubDropdown ? (
          <button
            type="button"
            onClick={() => toggleDropdown(dropdownKey)}
            className={`
              w-full flex items-center justify-between
              pr-4 py-2.5 text-sm text-left
              cursor-pointer transition-colors duration-200
              ${level > 1 ? "pl-10" : "pl-6"}
              ${
                isOpen
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-white)]/70 hover:text-[var(--color-accent)]"
              }
            `}
          >
            <span className="font-medium">{item.label}</span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        ) : (
          <RouterLinkButton
            onClick={() => handleNavClick(item.path)}
            active={active}
            padding={level > 1 ? "pl-10" : "pl-6"}
          >
            {item.label}
          </RouterLinkButton>
        )}

        {/* Nested sub-dropdown — animated height */}
        <AnimatePresence initial={false}>
          {hasSubDropdown && isOpen && (
            <motion.div
              key={dropdownKey}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-l-2 border-[var(--color-accent)]/40 ml-6"
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
     NAV ITEM (top-level)
  ===================================================== */

  const renderNavItem = (item) => {
    const hasDropdown = item.dropdown && item.dropdown.length > 0;
    const isOpen = openDropdowns[item.id];
    const active = item.path && isActivePath(item.path);

    return (
      <motion.div
        key={item.id}
        variants={navItemVariants}
        className="relative mb-1"
        ref={(el) => {
          dropdownRefs.current[item.id] = el;
        }}
      >
        {hasDropdown ? (
          <button
            type="button"
            onClick={() => toggleDropdown(item.id)}
            className={`
              w-full flex items-center justify-between
              px-4 py-3 rounded-[var(--radius-md)] mx-2
              cursor-pointer transition-colors duration-200
              ${
                isOpen
                  ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  : "text-[var(--color-white)]/85 hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <span className="text-[var(--color-accent)]">{item.icon}</span>
              <span className="font-semibold">{item.label}</span>
            </div>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleNavClick(item.path)}
            className={`
              w-full flex items-center gap-3
              px-4 py-3 rounded-[var(--radius-md)] mx-2
              cursor-pointer transition-colors duration-200
              ${
                active
                  ? "bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold shadow-[var(--shadow-gold)]"
                  : "text-[var(--color-white)]/85 hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]"
              }
            `}
          >
            <span className={active ? "text-[var(--color-dark)]" : "text-[var(--color-accent)]"}>
              {item.icon}
            </span>
            <span className="font-semibold">{item.label}</span>
          </button>
        )}

        {/* Dropdown menu — animated height + stagger children */}
        <AnimatePresence initial={false}>
          {hasDropdown && isOpen && (
            <motion.div
              key={`dropdown-${item.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <motion.div
                variants={dropdownContainerVariants}
                initial="hidden"
                animate="visible"
                className="mt-1"
              >
                {item.dropdown.map((dropdownItem) => (
                  <motion.div
                    key={dropdownItem.id}
                    variants={dropdownItemVariants}
                  >
                    {renderDropdownItem(dropdownItem)}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={toggleMenu}
            className="fixed inset-0 bg-[var(--color-dark)]/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="sidebar-panel"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed top-0 right-0 h-full w-80 z-50
              bg-[var(--color-primary-dark)]
              shadow-[var(--shadow-lg)]
              flex flex-col
            "
          >
            {/* =================================================
                HEADER
            ================================================= */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--color-accent)]/20">
              <div className="flex items-center gap-3">
                {/* Logo mark */}
                <motion.div
                  className="text-[var(--color-accent)] text-3xl font-serif leading-none"
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  A
                </motion.div>

                <div className="leading-none">
                  <div className="text-[var(--color-white)] text-lg font-serif tracking-[0.12em]">
                    AURORA
                  </div>
                  <div className="text-[var(--color-white)] text-[8px] tracking-[0.22em] opacity-80 mt-1">
                    ACTING ACADEMY
                  </div>
                </div>
              </div>

              <motion.button
                onClick={toggleMenu}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="
                  p-2 rounded-[var(--radius-md)]
                  text-[var(--color-white)]/70
                  hover:text-[var(--color-accent)]
                  hover:bg-[var(--color-accent)]/10
                  cursor-pointer transition-colors
                "
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* =================================================
                NAVIGATION
            ================================================= */}
            <motion.nav
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 overflow-y-auto py-4 px-2 custom-scrollbar"
            >
              {sidebarLinks.map((item) => renderNavItem(item))}
            </motion.nav>

            {/* =================================================
                AUTH SECTION
            ================================================= */}
            <div className="border-t border-[var(--color-accent)]/20 p-4">
              {!isAuthenticated && (
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => {
                    navigate("/login");
                    toggleMenu();
                  }}
                  className="
                    w-full flex items-center justify-center gap-2
                    bg-[var(--gradient-gold)] text-white
                    border border-[var(--color-accent)]
                    px-6 py-3 rounded-[var(--radius-full)]
                    font-semibold cursor-pointer
                    shadow-[var(--shadow-gold)]
                  "
                >
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </motion.button>
              )}

              {isAuthenticated && userData?.user_type === 4 && (
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  onClick={handleLogout}
                  className="
                    w-full flex items-center justify-center gap-2
                    bg-[var(--color-error)] text-[var(--color-white)]
                    px-6 py-3 rounded-[var(--radius-full)]
                    font-semibold cursor-pointer
                  "
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </motion.button>
              )}

              {isAuthenticated && userData?.user_type !== 4 && (
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => {
                    navigate("/dashboard");
                    toggleMenu();
                  }}
                  className="
                    w-full flex items-center justify-center gap-2
                    bg-[var(--gradient-gold)] text-[var(--color-dark)]
                    border border-[var(--color-accent)]
                    px-6 py-3 rounded-[var(--radius-full)]
                    font-semibold cursor-pointer
                    shadow-[var(--shadow-gold)]
                  "
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </motion.button>
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

/* =====================================================
   HELPER: Reusable nav link button (sub-item style)
===================================================== */

const RouterLinkButton = ({ onClick, active, padding, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      w-full text-left pr-4 py-2.5 text-sm cursor-pointer
      transition-colors duration-200
      ${padding}
      ${
        active
          ? "text-[var(--color-accent)] font-semibold bg-[var(--color-accent)]/10"
          : "text-[var(--color-white)]/70 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5"
      }
    `}
  >
    {children}
  </button>
);

export default SideBar;