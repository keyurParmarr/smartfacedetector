import { setBox } from "../REDUCERS/BOXREDUCER/box.actions";
import { setLocalCount } from "../REDUCERS/LOCALCOUNT/localcount.actions";
import { setUser } from "../REDUCERS/USERREDUCER/user.actions";
export const imageProcessing = (dispatch, data, userData) => {
  const { height, width } = document.getElementById("input");
  const boxData = data.outputs[0].data.regions.map((i) => {
    const clarfaiim = i.region_info.bounding_box;
    const w = Number(width);
    const h = Number(height);

    return {
      leftCol: clarfaiim.left_col * w,
      rightCol: w - clarfaiim.right_col * w,
      topRow: clarfaiim.top_row * h,
      bottomRow: h - clarfaiim.bottom_row * h,
    };
  });
  dispatch(setBox(boxData));
  dispatch(setLocalCount(boxData.length));
  dispatch(setUser(userData[0]));
};
