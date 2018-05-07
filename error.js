module.eports = (e) => {
  switch (e) {
    case 1:
      return { code: 1, message: "Invalid params" };
      break;
    default:
      return { code: 0, message: "Unknown Error." };
  }
}
