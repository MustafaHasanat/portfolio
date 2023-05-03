export const urls = {
    myEmail: "mustafa.hasanat99@gmail.com",
    myPhoneNumber: "+962780387522",
    myLinkedInURL: "https://www.linkedin.com/in/mustafa-alhasanat/",
    myGitHubURL: "https://github.com/MustafaHasanat",
    myLeetCodeURL: "https://leetcode.com/Mustafa1999/",
    myFacebookURL: "https://www.facebook.com/mustfa.alhasanat",
    myUdemyURL: "https://www.udemy.com/user/mustfa-alhasana/",
    myCalendlyURL: "https://calendly.com/mustafa-hasanat/long-interview",
    myDribbbleURL: "https://dribbble.com/MustafaAlhasanat",
    myCourseraURL:
        "https://www.coursera.org/user/6a1a09a353774aa843c9328e7053d5f9",
    myCVURL:
        "https://docs.google.com/document/d/e/2PACX-1vRUFPqrfEa6liv4fabfbP3DRU6MK_Kbs2ODfnHh-Gcv6lY7v-S0T0C9eqnrthojSw/pub",
    myBMCURL: "https://www.buymeacoffee.com/MustafaHasanat",
    myResumeURL:
        "https://drive.google.com/file/d/1JI0T4S14lpNuumdhuR9K9PLJaAUySMCe/view?usp=sharing",
};

const globalConstants = {
    contacts: [
        {
            text: "send me an email",
            distance: 400,
            delayVisible: 0,
            delayHidden: 0.3,
            src: String.raw`\icons\contacts\gmailIcon.png`,
            link: `mailto:${urls.myEmail}?Subject=Setting a meeting&body=Hello Mustafa, I would like to set a meeting with you.`,
        },
        {
            text: "contact me via LinkedIn",
            distance: 300,
            delayVisible: 0.1,
            delayHidden: 0.2,
            src: String.raw`\icons\websites\linkedInIcon.png`,
            link: urls.myLinkedInURL,
        },
        {
            text: "call me",
            distance: 200,
            delayVisible: 0.2,
            delayHidden: 0.1,
            src: String.raw`\icons\contacts\phoneIcon.png`,
            link: `tel:${urls.myPhoneNumber}`,
        },
        {
            text: "chat with me via Whatsapp",
            distance: 100,
            delayVisible: 0.3,
            delayHidden: 0,
            src: String.raw`\icons\contacts\whatsappIcon.png`,
            link: `http://wa.me/${urls.myPhoneNumber}`,
        },
    ],
};

export default globalConstants;
