/* eslint-disable react-hooks/exhaustive-deps */
import BioSection from "@/components/aboutPage/bioSection";
import CertificatesSection from "@/components/aboutPage/certificatesSection";
import EducationSection from "@/components/aboutPage/educationSection";
import ExperienceSection from "@/components/aboutPage/experienceSection";
import LanguagesSection from "@/components/aboutPage/languagesSection";
import { Certificate } from "@/types/certificate";
import { Course } from "@/types/course";
import { Experience } from "@/types/experience";
import { Language } from "@/types/language";
import { getAllCertificates } from "@/utils/sanity/certificate";
import { getAllCourses } from "@/utils/sanity/course";
import { getAllExperiences } from "@/utils/sanity/experience";
import { getAllLanguages } from "@/utils/sanity/language";
import { navigationBarActions } from "@/utils/store/store";
import { Stack } from "@mui/material";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const getStaticProps = async (): Promise<{
    props: {
        certificates: Certificate[];
        courses: Course[];
        languages: Language[];
        experiences: Experience[];
    };
}> => {
    const certificates = await getAllCertificates();
    const courses = await getAllCourses();
    const languages = await getAllLanguages();
    const experiences = await getAllExperiences();

    return {
        props: { certificates, courses, languages, experiences },
    };
};

interface AboutProps {
    certificates: Certificate[];
    courses: Course[];
    languages: Language[];
    experiences: Experience[];
}

export default function About({
    certificates,
    courses,
    languages,
    experiences,
}: AboutProps) {
    const currentView = useSelector(
        (state: { navigationBarReducer: { currentView: string } }) =>
            state.navigationBarReducer.currentView
    );

    const bioSecRef = useRef(null);
    const educationSecRef = useRef(null);
    const experienceSecRef = useRef(null);
    const certificatesSecRef = useRef(null);
    const languagesSecRef = useRef(null);

    const bioSecInView = useInView(bioSecRef);
    const educationSecInView = useInView(educationSecRef);
    const experienceSecInView = useInView(experienceSecRef);
    const certificatesSecInView = useInView(certificatesSecRef);
    const languagesSecInView = useInView(languagesSecRef);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            navigationBarActions.setAboutView({
                bio: currentView === "about-bio" ? true : false,
                education: currentView === "about-education" ? true : false,
                experience: currentView === "about-experience" ? true : false,
                certificates:
                    currentView === "about-certificates" ? true : false,
                languages: currentView === "about-languages" ? true : false,
            })
        );
    }, [currentView]);

    useEffect(() => {
        if (bioSecInView)
            dispatch(navigationBarActions.setCurrentView("about-bio"));
        if (educationSecInView)
            dispatch(navigationBarActions.setCurrentView("about-education"));
        if (experienceSecInView)
            dispatch(navigationBarActions.setCurrentView("about-experience"));
        if (certificatesSecInView)
            dispatch(navigationBarActions.setCurrentView("about-certificates"));
        if (languagesSecInView)
            dispatch(navigationBarActions.setCurrentView("about-languages"));
    }, [
        bioSecInView,
        educationSecInView,
        experienceSecInView,
        certificatesSecInView,
        languagesSecInView,
    ]);

    return (
        <Stack>
            <BioSection inViewRef={bioSecRef} />
            <EducationSection
                inViewRef={educationSecRef}
                certificates={certificates}
            />
            <ExperienceSection
                inViewRef={experienceSecRef}
                experiences={experiences}
            />
            <CertificatesSection
                inViewRef={certificatesSecRef}
                courses={courses}
            />
            <LanguagesSection
                inViewRef={languagesSecRef}
                languages={languages}
            />
        </Stack>
    );
}
