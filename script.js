let masterSwitchState = false;
let switchStates = [false, false, false, false]; // Adjust based on the number of relays

function toggleMasterSwitch() {
  masterSwitchState = !masterSwitchState;
  switchStates = switchStates.map(() => masterSwitchState);
  updateSwitches();
}

function toggleSwitch(index) {
  switchStates[index] = !switchStates[index];
  masterSwitchState = switchStates.every((state) => state);
  updateSwitches();
}

function updateSwitches() {
  const masterButton = document.querySelector(".master-switch .toggle-button");
  masterButton.classList.toggle("on", masterSwitchState);

  document
    .querySelectorAll(".switch .toggle-button")
    .forEach((button, index) => {
      button.classList.toggle("on", switchStates[index]);
    });
}
