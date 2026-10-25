
import { network } from "hardhat";

const { viem } = await network.create();

const greeter = await viem.getContractAt(
  "Greeter",
  "0x93291a985aa1a5156e346f04B10ECD45898eaee0"
);

const message = await greeter.read.greet();

console.log("Greeter response:", message);