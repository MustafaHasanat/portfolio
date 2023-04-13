import emailjs from "@emailjs/browser";

const sendEmail = (formData: any): number => {
    const SERVICE_ID = "service_vrk4ka8";
    const TEMPLATE_ID = "template_wjz06rl";
    const PUBLIC_KEY = "U-wOn_g6FYxF5xN4c";

    try {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
        return 200;
    } catch {
        return 500;
    }
};

export default sendEmail;
