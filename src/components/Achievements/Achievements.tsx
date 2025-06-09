import { motion } from "framer-motion";
import { useState } from "react";
import architect from "../../assets/architect.png";
import award from "../../assets/wow_award.png";
import presentation from "../../assets/presentation.png";
import { playSound } from "react-sounds";

type Achievement = {
    imageTitle: string;
    title: string;
    image: string;
    description: string;
    extraClass: string;
};

const achievements: Achievement[] = [
    {
        imageTitle: "International Presentation",
        title: "In-Person Presentation at Conference, Paris, France",
        image: presentation,
        description:
            "Delivered international talk on 'Synergy of SaMD and HybridAI' at Engineering Horizons Conference, Paris, earning top speaker feedback from 100+ attendees. A conference for Engineers, by Engineers, with 430 engineers from 230 countries, a fantastic platform to connect, showcase the work, and inspire one another.",
        extraClass: "relative sm:w-2/3 md:w-1/2",
    },
    {
        imageTitle: "Architect",
        title: "Aspiring Architect Certification",
        image: architect,
        description:
            "Awarded by the Capgemini Global Certification Board for demonstrating leadership in trends-driven solution architecture. Recognized for learning and delivering innovative, scalable solutions across more than two cross-platform medical applications, integrating the latest industry best practices and technologies.",
        extraClass: "relative w-[50%] md:w-[20%]",
    },
    {
        imageTitle: "WoW Award",
        title: "Best Employee Award of the Year",
        image: award,
        description:
            "Recognized for delivering high-impact mobile and web features adopted across projects.",
        extraClass: "relative sm:w-2/3 md:w-1/3",
    },
];

const Achievements = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const renderImage = (achievement: Achievement, index: number) => (
        <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl shadow-xl overflow-hidden cursor-pointer group transition-all ring-4 project-card ${achievement.extraClass}`}
            onClick={() => setSelectedImage(achievement.image)}
        >
            <img
                src={achievement.image}
                alt={achievement.imageTitle}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            <div
                className="absolute inset-0 bg-black bg-opacity-95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                onClick={() => playSound("ui/item_select")}
            >
                <h3 className="text-white text-xl font-semibold text-center px-4">
                    {achievement.imageTitle}
                </h3>
                <i className="fas fa-expand text-white text-xl ml-2" />
            </div>
        </motion.div>
    );

    const renderText = (achievement: Achievement, index: number) => (
        <div
            className={`mt-4 md:mt-0 md:mx-12 text-center md:w-[60%] md:${
                index % 2 != 0 ? "text-right" : "text-left"
            }`}
        >
            <h3 className="text-xl font-semibold text-white">
                {achievement.title}
            </h3>
            {achievement.description && (
                <p className="text-gray-400 mt-2">{achievement.description}</p>
            )}
        </div>
    );

    return (
        <section id="achievements" className="py-16 bg-gray-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold animate-fade">
                        <span className="gradient-text glow-text">
                            Achievements
                        </span>
                    </h2>
                    <p className="text-gray-400 animate-fade delay-100 mb-12 mt-4">
                        Milestones That Motivate My Future
                    </p>
                </div>
                <div className="flex flex-col w-full items-center justify-around gap-6 p-16">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className={`w-full flex flex-col md:${
                                index % 2 != 0 ? "flex-row-reverse" : "flex-row"
                            } items-center justify-start`}
                        >
                            {renderImage(achievement, index)}
                            {renderText(achievement, index)}
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        onClick={() => {
                            playSound("ui/item_deselect");
                            setSelectedImage(null);
                        }}
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
