#!/usr/bin/env bash
adb logcat -v time "*:F" RadioStream:V ReactNativeJS:V | lnav
