import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '919876543210';
  const message = 'Hello! I would like to inquire about your construction services.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ boxShadow: '0 0 30px rgba(37, 211, 102, 0.5)' }}
      aria-label="Contact us on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.027 3C9.397 3 4 8.398 4 15.027c0 2.642.775 5.105 2.11 7.183L4 29l7.092-2.063A12.945 12.945 0 0016.027 27C22.658 27 28 21.602 28 14.973 28 8.343 22.658 3 16.027 3zm5.793 18.37c-.245.687-1.422 1.296-1.955 1.38-.528.08-1.215.114-1.963-.122-.452-.146-1.033-.335-1.777-.658-3.124-1.353-5.165-4.519-5.33-4.737-.163-.218-1.273-1.694-1.273-3.236 0-1.542.802-2.303 1.086-2.616.282-.314.61-.392.814-.392.204 0 .407.002.586.01.189.007.441-.071.691.526.245.597.832 2.058.905 2.205.074.147.124.318.024.516-.098.198-.148.318-.297.49-.148.173-.313.387-.446.52-.148.148-.302.31-.13.608.173.298.77 1.272 1.655 2.058 1.137.998 2.094 1.31 2.392 1.458.298.148.469.13.642-.074.173-.204.74-.862.94-1.158.198-.298.397-.248.669-.148.273.099 1.722.813 2.015.96.298.148.497.223.571.347.074.124.074.713-.171 1.4z"/>
      </svg>

      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.button>
  );
};

export default WhatsAppButton;
