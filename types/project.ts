export type Project = {
    _id: string;
    title: string;
    description: string;
    launchedAt: Date;
    type: string;
    role: string;
    website: string;
    githubFrontend: string;
    githubBackend: string;
    tools: string[];
    landingPage: {
        asset: {
            url: string;
        };
    };
};
