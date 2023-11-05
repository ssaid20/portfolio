// Importing required libraries and utilities
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

/**
 * StarWrapper is a higher-order component (HOC) that wraps a given component
 * with motion effects and styles. It also provides an anchor point with the given ID.
 *
 * @param {React.Component} Component - The component to be wrapped.
 * @param {string} idName - The ID for the anchor point.
 * @returns {React.Component} - The wrapped component with motion effects and styles.
 */
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      // Motion section with staggered animations
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Anchor point for navigation */}
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {/* Render the passed component */}
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
