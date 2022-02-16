import { motion } from 'framer-motion';

const animations = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 0, x: 100},
    exit: {opacity: 0, x: -100},
}

function AnimatedPage({children}){
    return(
    <motion.div
    variants={animations}
    initial="initial"
    anmate="animate"
    exit="exit"
    >
        {children}
    </motion.div>
    );
}

export default AnimatedPage;