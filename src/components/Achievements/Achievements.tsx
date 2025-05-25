import { motion } from "framer-motion";
import { useState } from "react";
import architect from "../../assets/architect.png";
import award from "../../assets/wow_award.png";

const achievements = [
    {
        title: "WoW Award",
        image: award,
    },
    {
        title: "Architect",
        image: architect,
    },
];

const Achievements = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="achievements" className="py-16 bg-gray-900/50">
            <div className="container mx-auto px-4">
                <div className="md:w-8/12 md:text-end text-center">
                    <h2 className="text-3xl md:text-4xl font-bold animate-fade md:mr-4">
                        <span className="gradient-text glow-text">
                            Achievements
                        </span>
                    </h2>
                    <p className="text-gray-400 animate-fade delay-100 mb-12 mt-4">
                        Milestones That Motivate My Future
                    </p>
                </div>
                <div className="flex flex-col md:flex-row w-full items-center justify-around">
                    <motion.div
                        key={achievements[0].title}
                        whileHover={{ scale: 1.05 }}
                        className="relative sm:w-2/3 md:w-1/3 rounded-2xl shadow-xl overflow-hidden cursor-pointer group transition-all ring-4 mb-8 md:mb-0"
                        onClick={() => setSelectedImage(achievements[0].image)}
                    >
                        <img
                            src={achievements[0].image}
                            alt={achievements[0].title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                            <h3 className="text-white text-2xl font-semibold text-center px-4">
                                {achievements[0].title}
                            </h3>
                            <i className="fas fa-expand text-white text-xl ml-2" />
                        </div>
                    </motion.div>
                    <motion.div
                        key={achievements[1].title}
                        whileHover={{ scale: 1.05 }}
                        className="relative sm:w-2/3 md:w-2/12 md:h-96 rounded-2xl shadow-xl overflow-hidden cursor-pointer group transition-all ring-4"
                        onClick={() => setSelectedImage(achievements[1].image)}
                    >
                        <img
                            src={achievements[1].image}
                            alt={achievements[1].title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                            <h3 className="text-white text-2xl font-semibold text-center px-2">
                                {achievements[1].title}
                            </h3>
                            <i className="fas fa-expand text-white text-xl ml-2" />
                        </div>
                    </motion.div>
                </div>

                {/* Modal Preview */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <img
                            src={selectedImage}
                            alt="Certificate"
                            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Achievements;
