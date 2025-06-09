import { useEffect } from "react";

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".cursor") as HTMLElement;
        const cursorFollower = document.querySelector(
            ".cursor-follower"
        ) as HTMLElement;

        const move = (e: MouseEvent) => {
            if (cursor && cursorFollower) {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
                setTimeout(() => {
                    cursorFollower.style.left = `${e.clientX}px`;
                    cursorFollower.style.top = `${e.clientY}px`;
                }, 100);
            }
        };
        document.addEventListener("mousemove", move);

        const addHover = () => {
            cursor.classList.add("hovered");
            cursorFollower.classList.add("hovered");
        };
        const remHover = () => {
            cursor.classList.remove("hovered");
            cursorFollower.classList.remove("hovered");
        };
        document
            .querySelectorAll<HTMLElement>(
                "a,button,input,textarea,.project-card,.skill-item"
            )
            .forEach((el) => {
                el.addEventListener("mouseenter", addHover);
                el.addEventListener("mouseleave", remHover);
            });

        /*  scroll-fade animation */
        const fadeElements =
            document.querySelectorAll<HTMLElement>(".animate-fade");
        const handleScroll = () => {
            fadeElements.forEach((el) => {
                const top = el.getBoundingClientRect().top;
                if (top < window.innerHeight / 1.2) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        /* smooth hash scrolling */
        const smooth = (e: Event) => {
            e.preventDefault();
            const target = document.querySelector(
                (e.currentTarget as HTMLAnchorElement).hash
            );
            if (target) {
                const headerOffset =
                    document.querySelector("header")?.offsetHeight || 100;
                window.scrollTo({
                    top: (target as HTMLElement).offsetTop - headerOffset,
                    behavior: "smooth",
                });
            }
        };
        document
            .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
            .forEach((a) => a.addEventListener("click", smooth));

        return () => {
            document.removeEventListener("mousemove", move);
            window.removeEventListener("scroll", handleScroll);
            document
                .querySelectorAll('a[href^="#"]')
                .forEach((a) => a.removeEventListener("click", smooth));
            document
                .querySelectorAll<HTMLElement>(
                    "a,button,input,textarea,.project-card"
                )
                .forEach((el) => {
                    el.removeEventListener("mouseenter", addHover);
                    el.removeEventListener("mouseleave", remHover);
                });
        };
    }, []);

    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
        </>
    );
};

export default CustomCursor;
