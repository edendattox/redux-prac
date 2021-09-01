import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnResolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/project";

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

const unresolvedBugs = getUnResolvedBugs(store.getState());
console.log(unresolvedBugs);

// console.log(store.getState());

// import { bugAdded, bugResolved } from "./action";

// // const unsubscribe = store.subscribe(() => {
// //   console.log("store changed!", store.getState());
// // });

// store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugResolved(1));

// console.log(store.getState());
