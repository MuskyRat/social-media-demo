import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    selectUsers,
    selectPageSize,
    selectTotalItemsCount,
    selectCurrentPage,
    selectIsFetching,
    selectFollowingInProgress, selectPortionSize,

} from "../../redux/users-selectors";

class UsersContainer extends React.Component {


    componentDidMount() {

        const {currentPage, pageSize} = this.props;

        this.props.requestUsers(currentPage, pageSize);

    }

    onPageChanged = (pageNumber) => {

        const {pageSize} = this.props;

        this.props.requestUsers(pageNumber, pageSize);

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalItemsCount={this.props.totalItemsCount}
                      pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged} users={this.props.users} follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      followingInProgress={this.props.followingInProgress}
                      // portionSize={this.props.portionSize}
            />
            </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: selectUsers(state),
        pageSize: selectPageSize(state),
        totalItemsCount: selectTotalItemsCount(state),
        currentPage: selectCurrentPage(state),
        isFetching: selectIsFetching(state),
        followingInProgress: selectFollowingInProgress(state),
        // portionSize: selectPortionSize(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID));
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingtAC(isFetching))
//         }
//     }
// }

// let withRedirect = withAuthRedirect(UsersContainer)

export default compose(
   // withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers: requestUsers
    })
)(UsersContainer)