package com.tianyue.crop;

import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.provider.MediaStore;

/**
 * Created by zhudong on 2018/11/14
 */

public class IntentUtils {

    /**
     * 获取选择照片的intent
     * @return
     */
    public static Intent getPickIntentWithGallery(){
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_PICK);
        intent.setType("image/*");
        return intent;
    }

    /**
     * 获取裁切照片的intent
     * @param targetUri
     * @param outPutUri
     * @param aspectX
     * @param aspectY
     * @return
     */
    public static Intent getCropIntentWith(Uri targetUri, Uri outPutUri, int aspectX, int aspectY){
        Intent intent = new Intent("com.android.camera.action.CROP");
        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
        intent.setDataAndType(targetUri,"image/*");
        intent.putExtra("crop","true");
        intent.putExtra("aspectX", aspectX);
        intent.putExtra("aspectY", aspectY);
        intent.putExtra("scale", true);
        intent.putExtra(MediaStore.EXTRA_OUTPUT, outPutUri);
        intent.putExtra("outputFormat", Bitmap.CompressFormat.JPEG.toString());
        intent.putExtra("noFaceDetection", true); // no face detection
        return intent;
    }
}
