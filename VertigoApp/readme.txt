download the project, open vertigoApp and run npm install
open the project in Android Studio and wait for it to build
got to react-native-camera->java->org.reactnative->camera->RNCameraViewHelper

find getCorrectCameraRotation function (line 328) and replace it with

public static int getCorrectCameraRotation(int rotation, int facing, int cameraOrientation) {
    if (facing == CameraView.FACING_FRONT) {
      // Tested the below line and there's no need to do the mirror calculation
      final int landscapeFlip = rotationIsLandscape(rotation) ? 180 : 0;
      return (cameraOrientation + rotation + landscapeFlip) % 360;
    } else {
      final int landscapeFlip = rotationIsLandscape(rotation) ? 180 : 0;
      return (cameraOrientation - rotation + landscapeFlip) % 360;
    }
  }

you can also go to Movement.js and delete console.log(yDelta) to make it less laggy

run it using npm run android with your phone connected