package com.tianyue.crop;

import com.facebook.react.bridge.Promise;

/**
 * Created by zhudong on 2018/11/14
 */

public interface Crop {
    /**
     * 选择并裁切图片
     * @param outputX
     * @param outputY
     * @param promise
     */
    void selectWithCrop(int outputX, int outputY, Promise promise);
}
