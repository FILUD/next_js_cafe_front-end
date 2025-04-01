import { Modal } from "antd";
import { motion } from "framer-motion";

interface SuccessModalProop {
  open: boolean;
}

export const SuccessModal: React.FC<SuccessModalProop> = ({ open }) => {
  return (
    <Modal
      open={open}
      footer={false}
      closeIcon={false}
      width={300} 

    >
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.8 }} 
        animate={{ opacity: 1, y: 0, scale: 1 }} 
        transition={{ duration: 0.5, ease: "easeOut" }} 
        className="text-center items-center flex justify-center gap-5 p-6 rounded-lg shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }} 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-custom_brown" 
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, fontSize: 20 }} 
          animate={{ opacity: 1, fontSize: 14}} 
          transition={{ delay: 0.5, duration: 0.5 }} 
          className="text-[18px] font-semibold text-green-700" 
        >
          Successfully
        </motion.p>
      </motion.div>
    </Modal>
  );
};