import { beatleDetails, beatlesFunFacts } from "../data";

export function fetchBeatleData(id) {
  let detailsPromise = fetchBeatleDetails(id);
  let factsPromise = fetchBeatleFacts(id);
  return {
    details: wrapPromise(detailsPromise),
    facts: wrapPromise(factsPromise)
  };
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

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
