import emailjs from "@emailjs/browser";

const sendEmail = (formData: any): { status: number; text: string } => {
    const SERVICE_ID = "service_vrk4ka8";
    const TEMPLATE_ID = "template_wjz06rl";
    const PUBLIC_KEY = "U-wOn_g6FYxF5xN4c";

    var response = { status: 0, text: "" };

    emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
        .then((res) => {
            response = { status: res.status, text: res.text };
        })
        .catch((err) => {
            response = { status: err.status, text: err.text };
        });

    return response;
};

export default sendEmail;
