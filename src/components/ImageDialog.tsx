"use client";
import React, { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";

interface ImageDialogProps {
  src: StaticImageData;
  alt: string;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openDialog = useCallback(() => setIsOpen(true), []);
  const closeDialog = useCallback(() => setIsOpen(false), []);

  // Mount check for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDialog();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeDialog]);

  const dialogContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeDialog}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDialog}
              className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300 
                         transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={28} />
            </button>
            <Image
              className="rounded-xl max-h-[85vh] w-auto object-contain"
              src={src}
              alt={alt}
              priority
              placeholder="blur"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Image with expand icon */}
      <div className="relative group">
        <Image
          className="rounded-xl w-full"
          src={src}
          alt={alt}
          priority
          placeholder="blur"
        />
        <button
          onClick={openDialog}
          className="absolute bottom-3 right-3 p-2 bg-black/60 hover:bg-black/80 rounded-lg 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     text-white cursor-pointer"
          aria-label="Expand image"
        >
          <Expand size={20} />
        </button>
      </div>

      {/* Dialog rendered via portal to body */}
      {mounted && createPortal(dialogContent, document.body)}
    </>
  );
};

export default ImageDialog;
