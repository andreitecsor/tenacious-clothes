import {createSelector} from "reselect";

const selectUSer = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUSer],
    (user) => user.currentUser
);