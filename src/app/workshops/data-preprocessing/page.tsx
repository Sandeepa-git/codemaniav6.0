import EventTemplate from "@/components/event-template";

export default function Workshop01Page() {
    return (
        <EventTemplate
            title="Workshop 01 – Data Preprocessing & Augmentation"
            tagline="Build Clean, Reliable, and Ready-to-Use Datasets"
            intro="This workshop is the first step into Codemania v6.0's data journey. Participants learn how to handle raw datasets, clean and transform data, and apply augmentation techniques to prepare data for analysis and modeling."
            status="Completed"
            date="February 11"
            takeaways={[
                {
                    title: "Data Cleaning",
                    description: "Handling missing values, duplicates, and inconsistent entries."
                },
                {
                    title: "Preprocessing Techniques",
                    description: "Transforming raw data into analysis-ready formats."
                },
                {
                    title: "Data Augmentation",
                    description: "Methods to expand and enhance dataset quality."
                },
                {
                    title: "Hands-on Practice",
                    description: "Prepare datasets for predictive modeling and analytical workflows."
                }
            ]}
            showContacts={false}
            registrationClosed={true}
            hideStatus={false}
            hideRegisterButton={true}
        />
    );
}
