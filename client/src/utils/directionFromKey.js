export const directionFromKey = (key = "") => {
    switch (key.toString().toLowerCase()) {
      case "w":
        return "up";
      case "arrowup":
        return "up";
  
      case "s":
        return "down";
      case "arrowdown":
        return "down";
  
      case "d":
        return "right";
      case "arrowright":
        return "right";
  
      case "a":
        return "left";
      case "arrowleft":
        return "left";
      default:
        return "";
    }
  };