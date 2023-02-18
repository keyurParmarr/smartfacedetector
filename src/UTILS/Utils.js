import { boxConstant } from "../REDUCERS/BOXREDUCER/box.constant";
export const imageProcessing = (
  setuser,
  setlocalCount,
  dispatch,
  data,
  userData
) => {
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
  setuser(userData[0]);
  setlocalCount(boxData.length);
  dispatch({
    type: boxConstant.SETBOX,
    payload: boxData,
  });
};
