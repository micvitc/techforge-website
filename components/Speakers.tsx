import React from "react";
import { FocusCardsComp } from "./FocusCards";

const Speakers = () => {
    return (
        <div
            id="jury"
            className="m-10 scroll-mt-20 flex flex-col gap-10 items-center justify-center"
        >
            <p className="text-white font-normal text-3xl">Speakers & Jury</p>
            <FocusCardsComp />
        </div>
    );
};

export default Speakers;
