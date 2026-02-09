import EventTemplate from "@/components/event-template";

export default function Workshop02Page() {
    return (
        <EventTemplate
            title="Workshop 02 – Introduction to Machine Learning & Data-Driven Thinking"
            tagline="Turn Data Into Insight"
            intro="Workshop 02 builds on the first session by introducing machine learning concepts and data-driven thinking. Participants will learn how to apply models to problem statements, evaluate performance, and optimize solutions."
            status="Scheduled"
            date="February 16"
            takeaways={[
                {
                    title: "Core ML Concepts",
                    description: "Supervised vs. unsupervised learning and workflow overview."
                },
                {
                    title: "Model Application",
                    description: "Applying machine learning models to datasets."
                },
                {
                    title: "Evaluation Metrics",
                    description: "Understanding accuracy, precision, recall, and other performance indicators."
                },
                {
                    title: "Analytical Thinking",
                    description: "Learn to approach datathon challenges with clarity and structured methodology."
                }
            ]}
            showContacts={false}
            registrationClosed={true}
            hideStatus={true}
        />
    );
}
