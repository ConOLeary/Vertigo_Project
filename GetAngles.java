package com.google.ar.sceneform.samples.augmentedfaces;

import com.google.ar.core.AugmentedFace;
import com.google.ar.core.Pose;
import com.google.ar.sceneform.math.Quaternion;

public class GetAngles {
    //Returns the yaw of the face (turning horizontally), positive angle means head turning to the right.
    public static double getYaw (AugmentedFace face) {
        Pose pose = face.getRegionPose(AugmentedFace.RegionType.NOSE_TIP);
        float [] temp = pose.getRotationQuaternion();
        Quaternion yaw = new Quaternion (0, temp[1], 0, temp[3]);
        yaw.normalize();
        double yawValue = Math.acos(yaw.w)*2; //Get angle value
        yawValue*= 180/Math.PI; //Convert from radians to degrees
        if (yaw.y>0) {
            yawValue *= -1; //Negative angle means head left, positive right
        }
        return yawValue;
    }
    //Returns the pitch (Turning vertically), positive angle indicates head moving up, negative - down.
    public static double getPitch (AugmentedFace face) {
        Pose pose = face.getRegionPose(AugmentedFace.RegionType.NOSE_TIP);
        float [] temp = pose.getRotationQuaternion();
        Quaternion pitch = new Quaternion (temp[0], 0, 0, temp[3]);
        pitch.normalize();
        double pitchValue = Math.acos(pitch.w)*2; //Get angle value
        pitchValue*= 180/Math.PI; //Convert from radians to degrees
        if (pitch.x>0) {
            pitchValue *= -1; //Negative angle means head down, positive up
        }
        return pitchValue;
    }
}
