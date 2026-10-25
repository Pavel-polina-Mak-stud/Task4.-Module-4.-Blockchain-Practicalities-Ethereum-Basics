
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GreeterModule = buildModule("GreeterModule", (m) => {
  const greeter = m.contract("Greeter", ["Pavel"]);

  return { greeter };
});

export default GreeterModule;
