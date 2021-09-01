import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getUnResolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/project";
import { usersAdded } from "./store/users";

const store = configureStore();

store.dispatch(
  bugAdded({
    description: "Bug 1",
  })
);
store.dispatch(
  bugAdded({
    description: "Bug 2",
  })
);
store.dispatch(
  bugAdded({
    description: "Bug 3",
  })
);

store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(projectAdded({ name: "project 2" }));

store.dispatch(usersAdded({ name: "user 1" }));
store.dispatch(usersAdded({ name: "user 2" }));

store.dispatch(
  bugAssignedToUser({
    bugId: 1,
    userId: 1,
  })
);

store.dispatch(
  bugResolved({
    id: 1,
  })
);

const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);

// console.log(store.getState());

// import { bugAdded, bugResolved } from "./action";

// // const unsubscribe = store.subscribe(() => {
// //   console.log("store changed!", store.getState());
// // });

// store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugResolved(1));

// console.log(store.getState());
