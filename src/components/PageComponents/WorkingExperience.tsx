import * as React from "react";
import { useState, Fragment } from "react";
import { WorkingCard } from "../CardComponents/WorkingCard";
import { ScrollView } from "react-native";

type WorkingExperienceType = {
  position: string;
  years: string;
  location: string;
  description: string;
};
export function WorkingExperience(): React.JSX.Element {
  const [workingExperiences, setWorkingExperiences] = useState<
    WorkingExperienceType[]
  >([
    {
      position: "Trainer & Konzepte",
      years: "2019-Aktuell",
      location: "Teach & Tech gGmbH",
      description:
        "Worked on the conception of the six month bootcamp Fullstack Development and several Web Basic courses. Built diffrent Web based Projects, documentation, live teaching.",
    },
    {
      position: "Software Entwicklung",
      years: "2023-Aktuell",
      location: "Ruhruniversität Bochum, Fak. Informatik",
      description:
        "Creating new features for the faculty webpages. Mainly in php and javaScript, but also some configuration (Docker, SQL, Wordpress). Set up scrum-based workflow for small dev team",
    },
  ]);
  return (
    <>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        style={{ flex: 1 }}
      >
        {workingExperiences.map((element, index) => {
          return (
            <Fragment key={`#-${index}`}>
              <WorkingCard
                position={element.position}
                years={element.years}
                location={element.location}
                description={element.description}
              />
            </Fragment>
          );
        })}
      </ScrollView>
    </>
  );
}
