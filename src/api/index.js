import { beatleDetails, beatlesFunFacts } from "../data";

export function fetchBeatleDetails(id) {
  console.log("fetch beatle...");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("fetched beatle");
      resolve(beatleDetails[id]);
    }, 2000);
  });
}

export function fetchBeatleFacts(id) {
  console.log("fetch beatle facts...");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("fetched beatle facts");
      resolve(beatlesFunFacts[id]);
    }, 3000);
  });
}
