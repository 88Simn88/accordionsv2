import { useState } from "react";
import "./accordion2.css"

const AccordionSection = ({
    section,
    isActiveSection,
    setActiveIndex,
    sectionIndex,
}) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex)
    }
    return (
        <div>
            <div className="accordion2-title" onClick={toggleSection}>
                <div>{section.title}</div>
                <div>{isActiveSection ? "-" : "+"}
                </div>
            </div>
            {isActiveSection && (
                <div className="accordion2-content">{section.content}</div>
            )}
        </div>
    )
}

const Accordion2 = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(null)
    return(
        <div className="accordion2-sty">
            {sections.map((section, index) => (
                <AccordionSection
                section={section}
                key={index}
                isActiveSection={index === activeIndex}
                setActiveIndex={setActiveIndex}
                sectionIndex={index}
                />
            ))}
        </div>
    )
}

export default Accordion2