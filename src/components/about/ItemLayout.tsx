"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { IItemLayout } from "@/interfaces/interfaces";
const ItemLayout = ({ children, className }: IItemLayout) => {
    return (
        <motion.div
            initial={{ scale: 0.85 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: "some" }}
            className={clsx(
                "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
export default ItemLayout;
