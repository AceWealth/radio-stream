package com.radiostream;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.github.yamill.orientation.OrientationPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.radiostream.di.components.ApplicationComponent;
import com.radiostream.di.components.DaggerApplicationComponent;
import com.radiostream.javascript.proxy.JsProxyPackage;
import com.radiostream.util.VerboseDebugTree;
import com.facebook.soloader.SoLoader;
import com.testfairy.react.TestFairyPackage;

import java.util.Arrays;
import java.util.List;

import timber.log.Timber;

public class MainApplication extends Application implements ReactApplication {

  private static ApplicationComponent mApplicationComponent = null;

  public static ApplicationComponent getApplicationComponent() {
    if (mApplicationComponent == null) {
      throw new RuntimeException("Remote service was not initialized");
    }

    return mApplicationComponent;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
            new OrientationPackage(),
        new JsProxyPackage(),
        new TestFairyPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
	Timber.plant(new VerboseDebugTree());

    mApplicationComponent = DaggerApplicationComponent.builder().build();
  }

}
