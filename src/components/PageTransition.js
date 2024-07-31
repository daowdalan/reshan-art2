"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const variants = {
  hidden: { opacity: 0, y: 0 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: 0, transition: { duration: 0.8 } },
};

const PageTransition = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={asPath}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        style={{ position: 'absolute', width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
