import { motion, AnimatePresence } from "framer-motion";

interface DraggableBottomSheetProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const DraggableBottomSheet = ({
    open,
    onClose,
    children,
}: DraggableBottomSheetProps) => (
    <AnimatePresence>
        {open && (
            <motion.div
                className="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="bg-gray-900 w-full max-w-xl rounded-t-2xl p-2 shadow-lg"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                        if (info.point.y > 100) onClose();
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                >
                    <div className="w-12 h-1.5 bg-gray-700 rounded-full mx-auto mb-4" />
                    {children}
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);
