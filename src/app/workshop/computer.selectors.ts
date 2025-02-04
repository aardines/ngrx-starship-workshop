import { createSelector } from "@ngrx/store";
import { selectComputer } from "../app.state";
import { SolarSystemLocation } from "../challenge.service";
import { ComputerState } from "./computer.reducer";
import { ViewscreenState } from "./viewscreen/viewscreen.component";

export const selectViewscreen = createSelector(
    selectComputer,
    (state: ComputerState) => {
        const view: ViewscreenState = {
            location: state.navigationData[0].location,
            course: state.navigationData[0].location,
            leftImage: state.navigationData[0].leftImage,
            centerImage: state.navigationData[0].centerImage,
            rightImage: state.navigationData[0].rightImage,
            laser: state.laserPercentage >= 5,
            tractor: state.enableTractorBeam,
        };
        return view;
    }
);

export const selectEngine = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.enginePercentage
    }
);

export const selectLasers = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.laserPercentage;
    }
);

export const selectDockingClamp = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.enableDocking
    }
);

export const selectShields = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.shieldPercentage;
    }
);

export const selectTractorbeam = createSelector(
    selectComputer,
    (state: ComputerState) => {
        return state.enableTractorBeam;
    }
);