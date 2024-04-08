#!/usr/bin/node
if (isNaN(parseInt(`${process.argv[2]}`))) {
  console.log("Missing number of occurrences");
} else {
  console.log("adham\n".repeat(process.argv[2] - 1) + "adham");
}

