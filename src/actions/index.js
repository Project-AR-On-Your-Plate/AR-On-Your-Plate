//example
export function updateCameraPermission() {
  return {
    type: "UPDATE_CAMERA_PERMISSION",
  };
}

export function updateTurkeyObj(object) {
  return {
    type: "UPDATE_TURKEY_OBJ",
    object,
  };
}

export function updateTurkeyMtl(mtl) {
  return {
    type: "UPDATE_TURKEY_MTL",
    mtl,
  };
}

export function updateDish(url) {
  return {
    type: "UPDATE_DISH",
    url,
  };
}

export function setModalVisible() {
  return {
    type: "SET_MODAL_VISIBLE",
  };
}

export function hideModal() {
  return {
    type: "HIDE_MODAL",
  };
}

export function filterFood(course) {
  return {
    type: "FILTER_FOOD",
    course,
  };
}
