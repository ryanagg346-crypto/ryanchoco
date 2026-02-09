import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Sparkles } from 'lucide-react';

const GiftBoxSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowMessage(true), 800);
    }
  };

  const handleReset = () => {
    setShowMessage(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles
              size={8 + Math.random() * 12}
              className="text-caramel"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            A Special Gift for You
          </h2>
          <p className="text-lg text-muted-foreground">
            Click to open your chocolate surprise! 🎁
          </p>
        </motion.div>

        {/* Gift Box */}
        <div className="flex justify-center">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer interactive"
            onClick={handleOpen}
            whileHover={{ scale: isOpen ? 1 : 1.05 }}
            whileTap={{ scale: isOpen ? 1 : 0.95 }}
          >
            {/* Box Body */}
            <motion.div
              className="absolute bottom-0 w-full h-3/4 rounded-lg"
              style={{
                background: 'linear-gradient(145deg, #6D4C41 0%, #4E342E 100%)',
                boxShadow: '0 20px 40px rgba(78, 52, 46, 0.4)',
              }}
            >
              {/* Ribbon Vertical */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-6 h-full"
                style={{
                  background: 'linear-gradient(90deg, #D7A86E 0%, #E8C48F 50%, #D7A86E 100%)',
                }}
              />
              {/* Ribbon Horizontal */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-full h-6"
                style={{
                  background: 'linear-gradient(180deg, #D7A86E 0%, #E8C48F 50%, #D7A86E 100%)',
                }}
              />
              
              {/* Gift Icon */}
              {!isOpen && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Gift size={48} className="text-chocolate-white opacity-30" />
                </motion.div>
              )}
            </motion.div>

            {/* Box Lid */}
            <motion.div
              className="absolute top-0 w-full h-1/4 rounded-lg origin-top"
              style={{
                background: 'linear-gradient(145deg, #795548 0%, #5D4037 100%)',
                boxShadow: '0 -5px 20px rgba(78, 52, 46, 0.3)',
              }}
              animate={{
                rotateX: isOpen ? -120 : 0,
                y: isOpen ? -20 : 0,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Ribbon Bow */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div
                    className="w-12 h-8 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, #E8C48F, #D7A86E)',
                    }}
                  />
                  <div
                    className="absolute top-0 left-1/2 -translate-x-full w-12 h-8 rounded-full -rotate-45"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, #E8C48F, #D7A86E)',
                    }}
                  />
                  <div
                    className="absolute top-0 left-1/2 w-12 h-8 rounded-full rotate-45"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, #E8C48F, #D7A86E)',
                    }}
                  />
                </div>
              </div>

              {/* Lid Ribbon */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-6 h-full"
                style={{
                  background: 'linear-gradient(90deg, #D7A86E 0%, #E8C48F 50%, #D7A86E 100%)',
                }}
              />
            </motion.div>

            {/* Chocolate Rain on Open */}
            <AnimatePresence>
              {isOpen && (
                <>
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-lg"
                      initial={{
                        x: 0,
                        y: -50,
                        opacity: 1,
                        rotate: 0,
                      }}
                      animate={{
                        x: (Math.random() - 0.5) * 300,
                        y: [0, -100, 400],
                        opacity: [1, 1, 0],
                        rotate: Math.random() * 720,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.05,
                        ease: 'easeOut',
                      }}
                      style={{
                        width: 15 + Math.random() * 20,
                        height: 10 + Math.random() * 15,
                        left: '50%',
                        top: '30%',
                        background: i % 3 === 0
                          ? 'linear-gradient(135deg, #4E342E, #3E2723)'
                          : i % 3 === 1
                          ? 'linear-gradient(135deg, #6D4C41, #5D4037)'
                          : 'linear-gradient(135deg, #FFF8E1, #F5F5DC)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Hearts on Open */}
            <AnimatePresence>
              {isOpen && (
                <>
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={`heart-${i}`}
                      className="absolute"
                      initial={{
                        x: 0,
                        y: 0,
                        scale: 0,
                        opacity: 1,
                      }}
                      animate={{
                        x: (Math.random() - 0.5) * 200,
                        y: -200 - Math.random() * 100,
                        scale: [0, 1.5, 1],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.3 + i * 0.1,
                        ease: 'easeOut',
                      }}
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                    >
                      <Heart
                        size={20 + Math.random() * 20}
                        fill="#FFB6C1"
                        color="#FFB6C1"
                      />
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Message Popup */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-primary/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleReset}
            >
              <motion.div
                className="bg-card rounded-3xl p-8 md:p-12 max-w-lg text-center shadow-2xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: 'spring', damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="mb-6"
                >
                  <Heart
                    size={60}
                    fill="#FFB6C1"
                    color="#FFB6C1"
                    className="mx-auto"
                  />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                  Happy Chocolate Day!
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  You are the chocolate to my life, the sweetness to my days,
                  and the love that makes everything better. 🍫❤️
                </p>

                <button
                  onClick={handleReset}
                  className="chocolate-button chocolate-shine interactive"
                >
                  <span className="relative z-10">More Chocolates! 🍫</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tap to Open Text */}
        {!isOpen && (
          <motion.p
            className="text-center mt-8 text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tap the gift to open ✨
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default GiftBoxSection;
