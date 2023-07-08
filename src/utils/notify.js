import { Notify } from "quasar";

export function errorAlert(error) {
  return Notify.create({
    timeout: 3500,
    position: "top",
    color: "red-6",
    message: error,
    icon: "error_outline",
    textColor: "white",
    classes:"ntfy-custom"
  });
};

export function infoAlert(info, icon="o_info") {
    return Notify.create({
      timeout: 2000,
      position: "top",
      color: "light-blue-10",
      message: info,
      icon: icon,
      textColor: "white",
  
    });
  };
  
  
  export function successAlert(info, icon="check_circle") {
    return Notify.create({
      timeout: 2000,
      position: "top",
      color: "positive",
      message: info,
      icon: icon,
      textColor: "white",
    });
  };
  