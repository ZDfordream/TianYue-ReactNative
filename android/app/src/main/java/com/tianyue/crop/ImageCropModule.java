package com.tianyue.crop;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by zhudong on 2018/11/14
 */

public class ImageCropModule extends ReactContextBaseJavaModule implements Crop{
    private CropImpl cropImpl;

    public  ImageCropModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ImageCrop";//返回原生模块的模块名，js部分会用到
    }

    @Override @ReactMethod
    public void selectWithCrop(int outputX, int outputY, Promise promise) {
        getCrop().selectWithCrop(outputX,outputY,promise);
    }

    private CropImpl getCrop(){
        if(cropImpl == null){
            cropImpl = CropImpl.of(getCurrentActivity());
            getReactApplicationContext().addActivityEventListener(cropImpl);
        }else{
            cropImpl.updateActivity(getCurrentActivity());
        }
        return cropImpl;
    }
}
