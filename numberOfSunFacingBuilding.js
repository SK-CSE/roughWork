// Number of buildings facing the sun problem

function numberOfSunFacingBuilding(arr){
  let count = 1;
  let current_max = arr[0];
  for(let i = 1; i<arr.length;i++){
    if(arr[i] > current_max){
      count++;
      current_max = arr[i];
    }
  }

  console.log(count);
}
const buildingHeight = [7, 4, 8, 2, 9];
numberOfSunFacingBuilding(buildingHeight);
