import {
    AboutPageProps,
    HomePageProps,
} from "@/utils/store/navigationBarSlice";

const getViewDetails = (
    bar: string,
    states: { homePage: HomePageProps; aboutPage: AboutPageProps }
) => {
    switch (bar) {
        case "home-main":
            return states.homePage.main;
        case "home-product":
            return states.homePage.product;
        case "home-skills":
            return states.homePage.skills;
        case "home-quotes":
            return states.homePage.quotes;

        case "about-bio":
            return states.aboutPage.bio;
        case "about-education":
            return states.aboutPage.education;
        case "about-experience":
            return states.aboutPage.experience;
        case "about-certificates":
            return states.aboutPage.certificates;
        case "about-languages":
            return states.aboutPage.languages;

        default:
            return false;
    }
};

export default getViewDetails;
