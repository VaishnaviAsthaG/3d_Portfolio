import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const amazonRef = useRef(null);
    const contactRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [amazonRef.current, contactRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={amazonRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Amazon Project" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Amazon Clone Project
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An clone website of Amazon using basic HTML and CSS.
                            </p>
                        </div>

                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={contactRef}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Rock Paper scissor" />
                            </div>
                            <h2>
                                Rock Paper Scissor
                            </h2>
                    </div>

                        {/*<div className="project" ref={ycDirectoryRef}>*/}
                        {/*    <div className="image-wrapper bg-[#ffefdb]">*/}
                        {/*        <img src="/images/project3.png" alt="copied" />*/}
                        {/*    </div>*/}
                        {/*    <h2>*/}
                        {/*        FAKE!!*/}
                        {/*    </h2>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;