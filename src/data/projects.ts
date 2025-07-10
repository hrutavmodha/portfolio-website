import type { project } from "../types/projects"
export const projects: project[] = [{
    title: "Text Utility App",
    subtitle: "My first MERN full-stack application",
    details: [
        "Performs live text manipulations: case conversion, whitespace removal, word/character count.", 
        "Built with MongoDB, Express, React, Node.js for a clean responsive UI and REST API.", 
        "Fully deployed and available online; demonstrates end-to-end MERN proficiency."
    ],
    deployed: true,
}, {
    title: "E-Commerce Platform",
    subtitle: "A classic shopping site with upcoming analytics",
    details: [
        "Product catalog, cart management, and secure checkout flows built on MERN.",
        "Next feature: integrate a data-analytics dashboard to visualize customer behavior and sales trends.",
        "WIP: analytics backend using Python & Pandas for real-time insights."
    ],
    deployed: false,
}, {
    title: "Desktop Assistant",
    subtitle: "Custom SKLearn-based voice & text assistant",
    details: [
        "Handles voice/text commands, system tasks, and context routing via bespoke ML pipelines.",
        "Modular architecture lets you plug in new command-handlers easily.",
        "Cross-platform builds for Windows, Linux, and macOS coming soon."
    ],
    deployed: false,
}]