import {createSelector} from 'reselect';




const selectUsersSelector = (state) => {
    return state.usersPage.users;
};

export const selectUsers = createSelector(selectUsersSelector, (users) => {
    return users.filter(u => true);
})

export const selectPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const selectTotalItemsCount = (state) => {
    return state.usersPage.totalItemsCount;
};

export const selectCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const selectIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const selectFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};

// export const selectPortionSize = (state) => {
//     return state.usersPage.portionSize;
// };

