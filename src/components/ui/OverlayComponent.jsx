import { motion } from 'framer-motion'

const OverlayComponent = () => {
  return (
    <motion.div
    initial={{ height:"0vh" }}
    animate={[
      {
        height: "100vh",
        bottom: "0%",
        transition: { duration: 1.2, ease: "anticipate", delay: 3.2 },
      },
      {
        bottom: "100%",
        transition: { duration: 1.2, ease: "easeInOut", delay: 4.5 },
      },  
    ]}
    className="absolute w-screen bottom-0 z-[1201] bg-theme-color text-[25vmin] bg-[url('/images/about2.png')] bg-cover bg-center md:bg-contain md:bg-start ">


    </motion.div>
  )
}

export default OverlayComponent