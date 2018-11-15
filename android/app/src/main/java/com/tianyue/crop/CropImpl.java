package com.tianyue.crop;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;

/**
 * Created by zhudong on 2018/11/14
 */

public class CropImpl implements ActivityEventListener, Crop {
    private final int RC_PICK = 50081;
    private final int RC_CROP = 50082;
    private final String CODE_ERROR_PICK = "用户取消";
    private final String CODE_ERROR_CROP = "裁切失败";

    private Promise pickPromise;
    private Uri outPutUri;
    private int aspectX;
    private int aspectY;
    private Activity activity;

    public static CropImpl of(Activity activity) {
        return new CropImpl(activity);
    }

    private CropImpl(Activity activity) {
        this.activity = activity;
    }

    public void updateActivity(Activity activity){
        this.activity=activity;
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (requestCode == RC_PICK) {
            if (resultCode == Activity.RESULT_OK && data != null) {
                outPutUri = Uri.fromFile(Utils.getPhotoCacheDir(System.currentTimeMillis() + ".jpg"));
                onCrop(data.getData(), outPutUri);
            } else {
                pickPromise.reject(CODE_ERROR_PICK, "没有获取到结果");
            }
        } else if (requestCode == RC_CROP) {
            if (resultCode == Activity.RESULT_OK) {
                pickPromise.resolve(outPutUri.getPath());
            } else {
                pickPromise.reject(CODE_ERROR_CROP, "裁剪失败");
            }
        }
    }

    @Override
    public void onNewIntent(Intent intent) {
    }

    @Override
    public void selectWithCrop(int outputX, int outputY, Promise promise) {
        this.pickPromise = promise;
        this.aspectX = outputX;
        this.aspectY = outputY;
        this.activity.startActivityForResult(IntentUtils.getPickIntentWithGallery(), RC_PICK);
    }

    private void onCrop(Uri targetUri, Uri outputUri) {
        this.activity.startActivityForResult(IntentUtils.getCropIntentWith(targetUri, outputUri, aspectX, aspectY), RC_CROP);
    }
}
