export const contacts = {
    myEmail: "mustafa.hasanat99@gmail.com",
    myPhoneNumber: "+962780387522",
    myLinkedInURL: "https://www.linkedin.com/in/mustafa-alhasanat/",
    myGitHubURL: "https://github.com/MustafaHasanat",
    myLeetCodeURL: "https://leetcode.com/Mustafa1999/",
    myFacebookURL: "https://www.facebook.com/mustfa.alhasanat",
    myUdemyURL: "https://www.udemy.com/user/mustfa-alhasana/",
    myCalendlyURL: "https://calendly.com/mustafa-hasanat/long-interview",
};

const globalConstants = {
    contacts: [
        {
            text: "send me an email",
            distance: 400,
            delayVisible: 0,
            delayHidden: 0.3,
            src: String.raw`\icons\contacts\gmailIcon.png`,
            link: `mailto:${contacts.myEmail}?Subject=Setting a meeting&body=Hello Mustafa, I would like to set a meeting with you.`,
        },
        {
            text: "contact me via LinkedIn",
            distance: 300,
            delayVisible: 0.1,
            delayHidden: 0.2,
            src: String.raw`\icons\websites\linkedInIcon.png`,
            link: contacts.myLinkedInURL,
        },
        {
            text: "call me",
            distance: 200,
            delayVisible: 0.2,
            delayHidden: 0.1,
            src: String.raw`\icons\contacts\phoneIcon.png`,
            link: `tel:${contacts.myPhoneNumber}`,
        },
        {
            text: "chat with me via Whatsapp",
            distance: 100,
            delayVisible: 0.3,
            delayHidden: 0,
            src: String.raw`\icons\contacts\whatsappIcon.png`,
            link: `http://wa.me/${contacts.myPhoneNumber}`,
        },
    ],
};

export default globalConstants;
