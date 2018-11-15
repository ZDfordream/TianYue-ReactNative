package com.tianyue.crop;

import android.os.Environment;

import java.io.File;

/**
 * Created by zhudong on 2018/11/14
 */

public class Utils {
    public static File getPhotoCacheDir(String fileName){
        return new File(Environment.getExternalStorageDirectory().getAbsoluteFile(),fileName);
    }
}
