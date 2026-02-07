
export const REGISTRATION_DEADLINE = new Date("2026-02-07T19:00:00+05:30");
// export const REGISTRATION_DEADLINE = new Date("2025-02-07T19:00:00+05:30"); // Testing

export const isRegistrationOpen = () => {
    const now = new Date();
    return now < REGISTRATION_DEADLINE;
};
